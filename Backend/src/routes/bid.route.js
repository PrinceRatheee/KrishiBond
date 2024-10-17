import express from "express";
import { createBidForFarmer,getBidsByDemandId} from "../controller/bid.controller.js";
const router = express.Router();
router.post("/createBidForFarmer/:demandId", createBidForFarmer);
router.get("/getBidsByDemandId/:demandId", getBidsByDemandId);

export default router;