import mongoose from 'mongoose';

const companySchema = new mongoose.Schema({
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
//     unique: true  // Unique company ID for blockchain
//   },
  credits: {
    type: Number,
    default: 100, 
  },
  demandsListed: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Demand' // Reference to Demand model , baad me bnaenge
  }],
//   smartContracts: [{
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'SmartContract' // Reference to smart contract model
//   }],
}, {
  timestamps: true  
});

// Exporting the model
const Company = mongoose.model('Company', companySchema);
export default Company;
