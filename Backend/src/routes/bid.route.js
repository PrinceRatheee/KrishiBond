import express from "express";
import {
  createBidForFarmer,
  getBidsByDemandId,
  getBidsByUserId,updateBidsByUser,
  startDelivery,
  updateDelivery,
  approveBidsByCompany
} from "../controller/bid.controller.js";
const router = express.Router();
router.post("/createBidForFarmer/:demandId", createBidForFarmer);
router.get("/getBidsByDemandId/:demandId", getBidsByDemandId);
router.get("/getBidsByUserId/:userId", getBidsByUserId);
router.get("/updateBidsByUserID/:bidID",updateBidsByUser);
router.post("/startDelivery/:bidID", startDelivery);
router.post("/updateDelivery/:bidID", updateDelivery);
router.post("/approveBidsByCompany/:bidID", approveBidsByCompany);
export default router;
