import mongoose from 'mongoose';

const farmerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  contact: {
    type: String,
    required: true,
    unique: true,  
    trim: true
  },
  address: {
    type: String,
    required: true,
    trim: true
  },
//   registrationId: {
//     type: String,
//     required: true,
//     unique: true  // Unique ID for blockchain
//   },
  farmSize: {
    type: Number,  
    required: false
  },
  credits: {
    type: Number,
    default: 100, // Initial credit score for the farmer
  },
  protectionFunds: {
    type: Number,
    default: 0, // Amount stored in protection funds
  },
  smartContracts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SmartContract' // Reference to smart contract model
  }]
}, {
  timestamps: true  
});


const Farmer = mongoose.model('Farmer', farmerSchema);
export default Farmer;
