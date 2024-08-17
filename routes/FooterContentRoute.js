import express from "express";
import {getFooterContent,postFooterContent} from "../controller/FooterContentController.js"
const FooterContentrouter = express.Router();

FooterContentrouter.get('/',getFooterContent);
FooterContentrouter.post('/',postFooterContent);

export default FooterContentrouter;