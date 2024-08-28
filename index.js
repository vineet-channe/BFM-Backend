import express from "express";
import rootRouter from "./routes/index.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const router = express.Router();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api",rootRouter);
const port = process.env.PORT || 3000;
app.listen(port,() => {
    console.log(`Server is running on port ${process.env.PORT}`);
});