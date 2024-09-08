import express from "express";
import multer from "multer";
import upload from "../middleware/multerMiddleware.js";
import { getMetaverses,getAllMetaverses,postMetaverses,updateMetaverses,deleteMetaverses} from "../controller/MetaversesController.js";
const Metaversesrouter = express.Router();

Metaversesrouter.get('/',getAllMetaverses);
Metaversesrouter.get('/:slug',getMetaverses);
Metaversesrouter.post('/',upload,postMetaverses);
Metaversesrouter.put('/:slug',upload,updateMetaverses);
Metaversesrouter.delete("/:slug",upload,deleteMetaverses);

export default Metaversesrouter;

