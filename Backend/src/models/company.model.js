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
  GSTNumber:{
    type:String,
    required:true,
  },
  credits: {
    type: Number,
    default: 100, 
  },
  demandsListed: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Demand' 
  }],
  smartContracts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SmartContract' 
  }],
}, {
  timestamps: true  
});

const Company = mongoose.model('Company', companySchema);
export default Company;
