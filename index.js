// const express = require("express");
// const router = express.Router();
// const rootRouter = require("./routes/index");
// const app = express();
// app.use("/api",rootRouter);

import express from "express";
import rootRouter from "./routes/index";
const app = express();
const router = express.Router();
app.use("/api",rootRouter);
