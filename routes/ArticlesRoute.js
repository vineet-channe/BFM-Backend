import express from "express";
import { getAllArticles,getArticles,postArticles,deleteAtricles,updateArticles } from "../controller/ArticlesController";
const Articlesrouter = express.Router();

Articlesrouter.get('/',getAllArticles);
Articlesrouter.get('/:id',getArticles);
Articlesrouter.post('/',postArticles);
Articlesrouter.put('/:id',updateArticles);
Articlesrouter.delete('/:id',deleteAtricles);

