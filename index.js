import express from "express";
import rootRouter from "./routes/index";
import dotenv from "dotenv";
dotenv.config({path : '../config/.env'});
const app = express();
const router = express.Router();
app.use("/api",rootRouter);
app.listen(process.env.PORT,() => {
    console.log(`Server is running on port ${process.env.PORT}`);
})