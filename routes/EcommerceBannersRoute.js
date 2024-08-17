import express from "express";
import { deleteEcommerceBanners, getAllEcommerceBanners, postEcommerceBanners, updateEcommerceBanners } from "../controller/EcommerceBannersController.js";
const EcommerceBannersrouter = express.Router();

EcommerceBannersrouter.post('/',postEcommerceBanners);
EcommerceBannersrouter.get('/',getAllEcommerceBanners);
EcommerceBannersrouter.put('/:id',updateEcommerceBanners);
EcommerceBannersrouter.delete('/:id',deleteEcommerceBanners);

export default EcommerceBannersrouter;


