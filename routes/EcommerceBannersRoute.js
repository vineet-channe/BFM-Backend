import express from "express";
import { deleteEcommerceBanners, getAllEcommerceBanners, postEcommerceBanners, updateEcommerceBanners } from "../controller/EcommerceBannersController";
const EcommerceBannersrouter = express.Router();

EcommerceBannersrouter.post('/',postEcommerceBanners);
EcommerceBannersrouter.get('/',getAllEcommerceBanners);
EcommerceBannersrouter.put('/:id',updateEcommerceBanners);
EcommerceBannersrouter.delete('/:id',deleteEcommerceBanners);


