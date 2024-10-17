import express from "express";
import { farmerSignUp,CompanySignUp } from "../controller/auth.controller.js";
const authRouter = express.Router();
authRouter.post("/farmer/signup", farmerSignUp);
authRouter.post("/Company/signup", CompanySignUp);
export default authRouter;
