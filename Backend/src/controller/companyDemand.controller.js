import CompanyDemand from "../models/companyDemand.model.js";
const getCompaniesDemands = async (req, res) => {
    try {
        const companies = await CompanyDemand.find();
        res.status(200).json(companies);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
const ListCompanyDemands=async(req,res)=>{
    const {companyID,crop,duration,quantity,rate}=req.body;

    if(!companyID||!crop||!duration||!quantity||!rate){
        return res.status(400).json({message:"All fields are required"});
    }
    const newCompanyDemand=new CompanyDemand({companyID,crop,duration,quantity,rate});
    try{
        await newCompanyDemand.save();
        res.status(201).json(newCompanyDemand);
    }catch{
        res.status(409).json({message:error.message});
    }
}

const getCompamnyDemandsById=async(req,res)=>{
    const {companyID}=req.params;
    try{
        const companyDemands=await CompanyDemand.find({companyID:companyID});
        res.status(200).json(companyDemands);
    }catch(error){
        res.status(404).json({message:error.message});
    }
}
export{ getCompaniesDemands,ListCompanyDemands,getCompamnyDemandsById};