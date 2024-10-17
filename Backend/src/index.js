import express from "express";
import connectDB from "./config/dbConfig.js";
import ServerConfig from "./config/ServerConfig.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import authRouter from "./routes/auth.route.js";
import companyDemandRouter from "./routes/companyDemand.route.js";
import bidRouter from "./routes/bid.route.js";
const app = express();

app.use(
  cors({
    origin: ServerConfig.Frontend_URL,
    credentials: true,
  })
);
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api/auth", authRouter);
app.use("/api/companydemand", companyDemandRouter);
app.use("/api/farmerBid", bidRouter);
app.listen(ServerConfig.PORT, async () => {
  console.log(`Server started on port ${ServerConfig.PORT}...`);
});

connectDB();
