import express from "express";
import { getCompaniesDemands,ListCompanyDemands} from "../controllers/bid.controller.js";
const router = express.Router();
router.route("/getdemands").get(getCompaniesDemands);
router.route("/listdemands").get(ListCompanyDemands);
export default router;