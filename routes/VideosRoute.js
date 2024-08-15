import express from "express";
import { getAllVideos,getVideos,postVideos,updateVideos,deleteVideos } from "../controller/VideosController";
const Videosrouter = express.Router();

Videosrouter.get('/',getAllVideos);
Videosrouter.get('/:id',getVideos);
Videosrouter.post('/',postVideos);
Videosrouter.put('/:id',updateVideos);
Videosrouter.delete("/:id",deleteVideos);
