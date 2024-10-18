import  { useState } from 'react';

const CancelBid = () => {
  const [bidId, setBidId] = useState('');
  const [reason, setReason] = useState('');
  const [submitted, setSubmitted] = useState(false);
const [cancel,setcancel]= useState("self-choice")
  const handleCancelSubmit = (e) => {
    e.preventDefault();

    if (!bidId || !reason) {
      alert('Please fill out all fields');
      return;
    }

    // Example submission logic: You can replace this with an actual API call
    console.log(`Bid ID: ${bidId}, Reason: ${reason}`);

    // Reset the form or handle the post-submission state
    setSubmitted(true);
    setBidId('');
    setReason('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {submitted ? (
        <div className="bg-white p-8 rounded-md shadow-lg text-center">
          <h2 className="text-2xl font-semibold text-green-600">Bid Cancelled</h2>
          <p className="mt-4 text-gray-700">Thank you for providing feedback.</p>
        </div>
      ) : (
        <form 
          className="bg-white p-8 rounded-lg shadow-md w-full max-w-md" 
          onSubmit={handleCancelSubmit}
        >
          <h1 className="text-2xl font-semibold mb-6 text-center text-gray-800">
            Cancel Your Bid
          </h1>

          <div className="mb-4">
          <label className="block text-black text-sm mb-2" htmlFor="role">
                Select Reason
              </label>
              <select
                id="role"
                className="w-full px-4 py-3 bg-gray-100 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
               value={cancel}
               onChange={(e)=> setcancel(e.target.value)}
                
              >
                <option value="selfchoice">Self choice</option>
                <option value="Climate">Climate Condition</option>
              </select>
          </div>

          <div className="mb-6">
            <label htmlFor="reason" className="block text-sm font-medium text-gray-700">
              Reason for Cancellation
            </label>
            <textarea
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Explain why you're canceling the bid"
              rows="4"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition duration-200"
          >
            Cancel Bid
          </button>
        </form>
      )}
    </div>
  );
};

export default CancelBid;
