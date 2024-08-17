import express from "express";
import { getMetaverses,getAllMetaverses,postMetaverses,updateMetaverses,deleteMetaverses} from "../controller/MetaversesController.js";
const Metaversesrouter = express.Router();

Metaversesrouter.get('/',getAllMetaverses);
Metaversesrouter.get('/:id',getMetaverses);
Metaversesrouter.post('/',postMetaverses);
Metaversesrouter.put('/:id',updateMetaverses);
Metaversesrouter.delete("/:id",deleteMetaverses);

export default Metaversesrouter;

