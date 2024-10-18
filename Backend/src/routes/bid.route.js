import express from "express";
import {
  createBidForFarmer,
  getBidsByDemandId,
  getBidsByUserId,updateBidsByUser
} from "../controller/bid.controller.js";
const router = express.Router();
router.post("/createBidForFarmer/:demandId", createBidForFarmer);
router.get("/getBidsByDemandId/:demandId", getBidsByDemandId);
router.get("/getBidsByUserId/:userId", getBidsByUserId);
router.get("/updateBidsByUserID/:bidID",updateBidsByUser);
export default router;
