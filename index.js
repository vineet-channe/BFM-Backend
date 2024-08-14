import express from "express";
import rootRouter from "./routes/index";
const app = express();
const router = express.Router();
app.use("/api",rootRouter);
