import express from "express";
import { getCompaniesDemands,ListCompanyDemands } from "../controller/companyDemand.controller.js";
const router = express.Router();
router.post("/create", ListCompanyDemands);
router.get("/get", getCompaniesDemands);
export default router;
