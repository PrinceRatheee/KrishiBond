import express from "express";
import { createBidForFarmer} from "../controller/bid.controller.js";
const router = express.Router();
router.post("/createBidForFarmer/:companyId", createBidForFarmer);
export default router;