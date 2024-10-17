import express from "express";
import { farmerSignUp,CompanySignUp ,signup,login} from "../controller/auth.controller.js";
const authRouter = express.Router();
authRouter.post("/user/signup", signup);
authRouter.post("/user/login",login );
authRouter.post("/user/farmer/signup", farmerSignUp);
authRouter.post("/user/Company/signup", CompanySignUp);
export default authRouter;
