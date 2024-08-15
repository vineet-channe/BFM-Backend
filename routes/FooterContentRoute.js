import express from "express";
import {getFooterContent,postFooterContent} from "../controller/FooterContentController"
const FooterContentrouter = express.Router();

FooterContentrouter.get('/',getFooterContent);
FooterContentrouter.post('/',postFooterContent);
