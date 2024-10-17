import express from "express";
import { farmerDetails,companyDetails ,signup,login, getCompanydetails,getFarmerdetails} from "../controller/auth.controller.js";
const authRouter = express.Router();

authRouter.post("/user/signup", signup);
authRouter.post("/user/login",login );


authRouter.post("/user/login/farmerdetails", farmerDetails);
authRouter.post("/user/login/companydetails", companyDetails);
authRouter.post("/user/getCompanydetails", getCompanydetails);
authRouter.post("/user/getFarmerdetails", getFarmerdetails);

export default authRouter;
