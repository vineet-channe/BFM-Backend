import express from "express";
import { getAllArticles,getArticles,postArticles,deleteArticles,updateArticles } from "../controller/ArticlesController.js";
const Articlesrouter = express.Router();

Articlesrouter.get('/',getAllArticles);
Articlesrouter.get('/:id',getArticles);
Articlesrouter.post('/',postArticles);
Articlesrouter.put('/:id',updateArticles);
Articlesrouter.delete('/:id',deleteArticles);

export default Articlesrouter;

