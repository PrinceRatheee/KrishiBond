// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract FundManager {
    struct Deposit {
        address receiver;
        uint256 amount;
    }

    // A mapping to store sender's deposited amount and the receiver's address
    mapping(address => Deposit) public deposits;

    // Deposit funds and map the sender to the receiver and amount
    function depositFunds(address _receiver) external payable {
        require(msg.value > 0, "You need to deposit some Ether.");
        require(_receiver != address(0), "Receiver address cannot be zero.");
        require(_receiver != msg.sender, "Receiver address cannot be the same as sender.");  // New condition
        
        deposits[msg.sender] = Deposit(_receiver, msg.value); // Store the deposit details
    }

    // Send a specified amount of Ether to a given receiver address
    function sendToSpecificAddress(address _receiver, uint256 _amount) external {
        Deposit storage userDeposit = deposits[msg.sender];
        require(userDeposit.amount > 0, "No funds to send.");
        require(_receiver == userDeposit.receiver, "Receiver address mismatch.");
        require(_amount <= userDeposit.amount, "Insufficient funds to send.");

        // Reduce the sender's balance
        userDeposit.amount -= _amount;

        // Send the Ether
        (bool sent, ) = _receiver.call{value: _amount}("");
        require(sent, "Failed to send Ether.");
    }

    // Refund a specific amount, send percentage to receiver, and return the remaining to sender
    function refundToSender(address _receiver, uint256 _amount, uint256 _percent) external {
        Deposit storage userDeposit = deposits[msg.sender];
        require(userDeposit.amount >= _amount, "Stored amount is less than the specified amount.");
        require(_percent <= 100, "Percentage cannot be more than 100.");
        require(userDeposit.receiver == _receiver, "Receiver address mismatch.");

        // Calculate the percentage to be sent to the receiver
        uint256 receiverAmount = (_amount * _percent) / 100;
        uint256 senderAmount = _amount - receiverAmount;

        // Reduce the sender's balance
        userDeposit.amount -= _amount;

        // Send the calculated percentage to the receiver
        (bool sentToReceiver, ) = _receiver.call{value: receiverAmount}("");
        require(sentToReceiver, "Failed to send Ether to receiver.");

        // Send the remaining amount back to the sender
        (bool sentToSender, ) = msg.sender.call{value: senderAmount}("");
        require(sentToSender, "Refund to sender failed.");
    }

    // Function to retrieve deposit details (receiver and amount) for a sender
    function getDepositDetails(address _sender) external view returns (address receiver, uint256 amount) {
        Deposit storage userDeposit = deposits[_sender];
        return (userDeposit.receiver, userDeposit.amount);
    }
}
