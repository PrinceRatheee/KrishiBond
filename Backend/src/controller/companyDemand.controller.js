import CompanyDemand from "../models/companyDemand.model.js";
import Bid from "../models/bid.model.js";
const getCompaniesDemands = async (req, res) => {
    try {
        const companies = await CompanyDemand.find();
        res.status(200).json(companies);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
const ListCompanyDemands = async (req, res) => {
    const { companyID, crop, duration, quantity, rate } = req.body;

    if (!companyID || !crop || !duration || !quantity || !rate) {
        return res.status(400).json({ message: "All fields are required" });
    }
    const quantityLeft=quantity;
    const newCompanyDemand = new CompanyDemand({ companyID, crop, duration, quantity, rate ,quantityLeft});
    try {
        await newCompanyDemand.save();
        res.status(201).json(newCompanyDemand);
    } catch (error) { // Fix: Pass the error object in the catch block
        res.status(409).json({ message: error.message });
    }
}

const getCompamnyDemandsById=async(req,res)=>{
    const {companyID}=req.params;
    try{
        const companyDemands=await CompanyDemand.find({companyID:companyID});
        console.log("cvgndhvfhjbd");
        res.status(200).json(companyDemands);
    }catch(error){
        res.status(404).json({message:error.message});
    }
}

const approvedFarmerBids=async(req,res)=>{
    const {bidId}=req.params;
    const approved=req.body;
    try{
     const bid=await Bid.findById(bidId);
        if(approved){
            bid.status='approved';
            const companyId=bid.appliedFor;
            const companyDemand=await CompanyDemand.findById(companyId);
            companyDemand.bidsAccepted.push(bidId);
            companyDemand.quantityLeft-=bid.quantity;
        }else{
            bid.status='rejected';
            const companyId=bid.appliedFor;
            const companyDemand=await CompanyDemand.findById(companyId);
            companyDemand.bidsApplied.pull(bidId);
        }
        await bid.save();
        await companyDemand.save();
        res.status(200).json(bid);
    }catch(error){
        res.status(404).json({message:error.message});
    }
}
export{ getCompaniesDemands,ListCompanyDemands,getCompamnyDemandsById,approvedFarmerBids};