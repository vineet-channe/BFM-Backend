import express from "express";
import multer from "multer";
import upload from "../middleware/multerMiddleware.js";
import { getMetaverses,getAllMetaverses,postMetaverses,updateMetaverses,deleteMetaverses} from "../controller/MetaversesController.js";
const Metaversesrouter = express.Router();

Metaversesrouter.get('/',getAllMetaverses);
Metaversesrouter.get('/:id',getMetaverses);
Metaversesrouter.post('/',upload,postMetaverses);
Metaversesrouter.put('/:id',upload,updateMetaverses);
Metaversesrouter.delete("/:id",upload,deleteMetaverses);

export default Metaversesrouter;

