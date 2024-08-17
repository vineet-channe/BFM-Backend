import express from "express";
import { getAllNewsCategories,getNewsCategories,postNewsCategories,updateNewsCategories,deleteNewsCategories } from "../controller/NewsCategoriesController.js";
const NewsCategoriesrouter = express.Router();

NewsCategoriesrouter.get('/',getAllNewsCategories);
NewsCategoriesrouter.get('/:id',getNewsCategories);
NewsCategoriesrouter.post('/',postNewsCategories);
NewsCategoriesrouter.put('/:id',updateNewsCategories);
NewsCategoriesrouter.delete("/:id",deleteNewsCategories);

export default NewsCategoriesrouter;
