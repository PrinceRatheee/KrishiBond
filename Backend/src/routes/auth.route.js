import express from "express";
import {
  farmerDetails,
  companyDetails,
  signup,
  login,
  getCompanydetails,
  getFarmerdetails,
} from "../controller/auth.controller.js";
const authRouter = express.Router();

authRouter.post("/user/signup", signup);
authRouter.post("/user/login", login);

authRouter.post("/user/login/farmerdetails", farmerDetails);
authRouter.post("/user/login/companydetails", companyDetails);
authRouter.get("/user/getCompanydetails/:id", getCompanydetails);
authRouter.get("/user/getFarmerdetails/:id", getFarmerdetails);

export default authRouter;
