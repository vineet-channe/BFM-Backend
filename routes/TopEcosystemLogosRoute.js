import express from "express";
import { getAllTopEcosystemLogos,postTopEcosystemLogos,updateTopEcosystemLogos,deleteTopEcosystemLogos } from "../controller/TopEcosystemLogosController";
const TopEcosystemLogosrouter = express.Router();
TopEcosystemLogosrouter.get('/',getAllTopEcosystemLogos);
TopEcosystemLogosrouter.post('/',postTopEcosystemLogos);
TopEcosystemLogosrouter.put('/:id',updateTopEcosystemLogos);
TopEcosystemLogosrouter.delete("/:id",deleteTopEcosystemLogos);