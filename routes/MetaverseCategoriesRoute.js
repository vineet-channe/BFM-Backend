import express from "express";
import { deleteMetaverseCategories, getAllMetaverseCategories, getMetaverseCategories, postMetaverseCategories, updateMetaverseCategories } from "../controller/MetaverseCategoriesController";
const MetaverseCategoriesrouter = express.Router();

MetaverseCategoriesrouter.get('/',getAllMetaverseCategories);
MetaverseCategoriesrouter.get('/:id',getMetaverseCategories);
MetaverseCategoriesrouter.post('/',postMetaverseCategories);
MetaverseCategoriesrouter.put('/:id',updateMetaverseCategories);
MetaverseCategoriesrouter.delete("/:id",deleteMetaverseCategories);
