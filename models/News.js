import mongoose from "mongoose";

const NewsSchema = new mongoose.Schema({
    title : String,
    link : String,
    metaverse : {type : mongoose.Schema.Types.ObjectId , ref : "Metaverses"}
});

export default mongoose.model("News", NewsSchema);
