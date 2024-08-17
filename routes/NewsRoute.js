import express from "express";
import { getAllNews,getNews,postNews,updateNews,deleteNews } from "../controller/NewsController.js";
const Newsrouter = express.Router();

Newsrouter.get('/',getAllNews);
Newsrouter.get('/:id',getNews);
Newsrouter.post('/',postNews);
Newsrouter.put('/:id',updateNews);
Newsrouter.delete("/:id",deleteNews);

export default Newsrouter;
