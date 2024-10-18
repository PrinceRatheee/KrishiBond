# Krishi-Bond

This project aims to create a decentralized platform to facilitate direct interaction between **farmers** and **companies**, eliminating the need for middlemen. It leverages **blockchain technology** using **smart contracts** written in Solidity to ensure trust and transparency. Farmers can bid on the demands posted by companies, and smart contracts manage all interactions. The system also supports fund management for farmer protection.

## Features
- **Two Dashboards**: 
  - **Farmer Dashboard**: Farmers can view company demands, place bids, and track deliveries.
  - **Company Dashboard**: Companies can create demands and track bids.
- **Smart Contracts on Blockchain**: All interactions are secured via smart contracts, ensuring transparency.
- **Bid Management**: Farmers bid on company demands. Companies select bids based on their preferences.
- **Delivery Management**: Tracks the delivery and cancellations by both farmers and companies.
- **Farmer Protection Fund**: A portion of payments is stored for future compensation in case of issues.

---

## Flow Overview

### 1. **User Registration and Login**
- Both farmers and companies need to register and log in to their respective dashboards.

### 2. **Creating and Bidding on Demands**
- Companies list their demands.
- Farmers view these demands and place their bids.

### 3. **Smart Contract Management**
- When a company accepts a bid, a **smart contract** is created to secure the agreement.

### 4. **Delivery Handling**
- If delivery is **successful**, the payment is released to the farmer.
  - A part of the payment goes into the **Farmer Protection Fund**.
- In case of **delivery issues**:
  - If the farmer cancels:
    - **Own Will**: If it’s the first time, no penalty. Otherwise, compensation is charged, and credits are reduced.
    - **Climate Conditions**: No penalty, verified by government officials.
  - If the company cancels, compensation is given to the farmer, and the company's credits are lowered.

### 5. **Role of Government Official**
- In special cases, government officials validate climate-related issues and approve compensation from the **Farmer Protection Fund**.

---

## Technology Stack
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Blockchain**: Ethereum, Solidity for Smart Contracts
- **Authentication**: JWT
- **Real-time Communication**: Socket.io (optional)

---

## Installation and Setup

### Prerequisites
Make sure you have the following installed:
- **Node.js** and **npm**
- **MongoDB** (running locally or remotely)
- **Metamask Wallet** (for blockchain interaction)
- **HardHat** 

---

### 1. Clone the Repository
```bash
git clone https://github.com/PrinceRatheee/KrishiBond
cd KrishiBond
```

### 2. Install Dependencies
```bash
# Install server dependencies
cd Backend
npm install

# Install client dependencies
cd ../Frontend
npm install

```
### 3.Run this in both frontend and backend 
```bash
npm start 
```

You can see this project running on localhost of your computer.
