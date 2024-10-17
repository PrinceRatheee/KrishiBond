import User from '../models/user.model.js';
import Bid from '../models/bid.model.js';
import CompanyDemand from '../models/companyDemand.model.js';

const createBidForFarmer=async(req,res)=>{
    try{
        console.log("ndgghdfddf---");
        const {demandId}=req.params;
        const {user,appliedRate,quantity,duration}=req.body;
        const farmer=await User.findById(user);
        
        const companyDemand=await CompanyDemand.findById(demandId);
        if(!farmer){
            return res.status(404).json({message:"Farmer not found"});
        }
        if(!companyDemand){
            return res.status(404).json({message:"Company Demand not found"});
        }
       const bid=new Bid({
              user,
              appliedFor: demandId,
              appliedRate,
              quantity,
              duration  
        });
        await bid.save();
        farmer.bids.push(bid._id);
        await farmer.save();
        companyDemand.bidsApplied.push(bid._id);
        await companyDemand.save();
        res.status(201).json(bid);
    }catch(error){
        res.status(500).json({message:error.message});
    }
}
const getBidsByDemandId=async(req,res)=>{
    try{
        const {demandId}=req.params;
        const bids=await Bid.find({appliedFor:demandId});
        res.status(200).json(bids);
    }catch(error){
        res.status(500).json({message:error.message});
    }
}
export  {createBidForFarmer,getBidsByDemandId};