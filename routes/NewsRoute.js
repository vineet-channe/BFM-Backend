import express from "express";
import { getAllNews,getNews,postNews,updateNews,deleteNews } from "../controller/NewsController.js";
const Newsrouter = express.Router();

Newsrouter.get('/',getAllNews);
Newsrouter.get('/:slug',getNews);
Newsrouter.post('/',postNews);
Newsrouter.put('/:slug',updateNews);
Newsrouter.delete("/:slug",deleteNews);

export default Newsrouter;
