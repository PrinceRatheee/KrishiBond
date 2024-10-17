import User from '../models/user.model.js';
import Bid from '../models/bid.model.js';
import CompanyDemand from '../models/companyDemand.model.js';
const createBidForFarmer=async(req,res)=>{
    try{
        const {companyId}=req.params;
        const {user,status,appliedFor,appliedRate,quantity,duration}=req.body;
        const farmer=await User.findById(user);
        const companyDemand=await CompanyDemand.findById(companyId);
        if(!farmer){
            return res.status(404).json({message:"Farmer not found"});
        }
        if(!companyDemand){
            return res.status(404).json({message:"Company Demand not found"});
        }
       const bid=new Bid({
              user,
              status,
              appliedFor,
              appliedRate,
              quantity,
              duration  
        });
        await bid.save();
        farmer.bids.push(bid);
        await farmer.save();
        res.status(201).json(bid);
    }catch(error){
        res.status(500).json({message:error.message});
    }
}
export  {createBidForFarmer};