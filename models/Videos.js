import mongoose from "mongoose";

const VideosSchema = new mongoose.Schema({
    title : String,
    url : String,
    platform : String,
    createdAt : {type : Date, default : Date.now}
});

export default mongoose.model("Videos", VideosSchema);

