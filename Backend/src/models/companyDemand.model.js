
import mongoose from mongoose;



const companyDemandSchema = mongoose.Schema({
    companyID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    crop: {
        type: String,
        required: true,
    },

    duration:{
        type:Number,  //in days , in other case change it in frontend
        required:true,
    },
    
    quantity:{
        type:Number, //in kg
        required: true
    },
    rate:{
        type:Number , //in per kg
        required: true
    },
    
    bidsApplied:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Bid'
    }],
    bidsAccepted:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Bid'
    }],
    quantityLeft:{
        type: Number,
        default: quantity
    },
    
   
  
}, {
    timestamps: true
});

const CompanyDemand = mongoose.model('User', companyDemandSchema);

export default CompanyDemand;
