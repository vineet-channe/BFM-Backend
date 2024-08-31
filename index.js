import express from "express";
import cors from "cors";
import rootRouter from "./routes/index.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const router = express.Router();
app.use(cors({
    origin: ['http://localhost:5173', 'https://metaverse-marketplace-frontend.vercel.app/']
}));
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api",rootRouter);
const port = process.env.PORT || 3000;
app.listen(port,() => {
    console.log(`Server is running on port ${process.env.PORT}`);
});