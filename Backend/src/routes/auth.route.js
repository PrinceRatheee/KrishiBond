import express from "express";
import { farmerDetails,companyDetails ,signup,login} from "../controller/auth.controller.js";
const authRouter = express.Router();
authRouter.post("/user/signup", signup);
authRouter.post("/user/login",login );
authRouter.post("/user/farmer/signup", farmerDetails);
authRouter.post("/user/Company/signup", companyDetails);
export default authRouter;
