import express from "express";
import { getCompaniesDemands,ListCompanyDemands,getCompamnyDemandsById } from "../controller/companyDemand.controller.js";
const router = express.Router();
router.post("/create", ListCompanyDemands);
router.get("/get", getCompaniesDemands);
router.get("/get/:companyID", getCompamnyDemandsById);
export default router;
