import User from "../models/user.model.js";
import Bid from "../models/bid.model.js";
import CompanyDemand from "../models/companyDemand.model.js";
import Company from "../models/company.model.js";

const createBidForFarmer = async (req, res) => {
  try {
    const { demandId } = req.params;
    const { user, appliedRate, quantity, duration } = req.body;
    const farmer = await User.findById(user);
    const companyDemand = await CompanyDemand.findById(demandId);
    if (!farmer) {
      return res.status(404).json({ message: "Farmer not found" });
    }
    if (!companyDemand) {
      return res.status(404).json({ message: "Company Demand not found" });
    }
    const bid = new Bid({
      user,
      appliedFor: demandId,
      appliedRate,
      quantity,
      duration,
    });
    await bid.save();
    farmer.bids.push(bid._id);
    await farmer.save();
    companyDemand.bidsApplied.push(bid._id);
    await companyDemand.save();
    res.status(201).json(bid);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getBidsByDemandId = async (req, res) => {
  try {
    const { demandId } = req.params;
    const bids = await Bid.find({ appliedFor: demandId }).populate({
      path: "appliedFor",
      model: "CompanyDemand", // Reference the CompanyDemand model
    });
    res.status(200).json(bids);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getBidsByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const bids = await Bid.find({ user: userId });
    res.status(200).json(bids);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const updateBidsByUser = async (req, res) => {
  try {
    const { bidID: id } = req.params;
    const bids = await Bid.findByIdAndUpdate(id, { status: "cancelled" });
    bids.save();
    res.status(200).json(bids);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const approveBidsByCompany = async (req, res) => {
  try {
    const { bidID: id } = req.params;
    const bids = await Bid.findByIdAndUpdate(id, { status: "approved" });
    const companyDemand=await CompanyDemand.findById(bids.appliedFor[0]);
    companyDemand.bidsAccepted.push(bids);
    companyDemand.save();
    bids.save();
    res.status(200).json(bids);
  }catch(error){
    res.status(500).json({ message: error.message });
  }
}

const updateDelivery = async (req, res) => {
  try {
    const { bidID: id } = req.params;
    const bids = await Bid.findByIdAndUpdate(id, { delivered: true });
    bids.save();
    res.status(200).json(bids);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const startDelivery = async (req, res) => {
  try {
    const { bidID: id } = req.params;
    const bids = await Bid.findByIdAndUpdate(id, { deliveryStart: true });
    bids.save();
    res.status(200).json(bids);
  }catch(error){
    res.status(500).json({ message: error.message });
  }
}
export {
  createBidForFarmer,
  getBidsByDemandId,
  getBidsByUserId,
  updateBidsByUser,
  startDelivery,
  updateDelivery,
  approveBidsByCompany
};
