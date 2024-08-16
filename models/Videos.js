import mongoose from "mongoose";

mongoose.connect("mongodb+srv://vineetchanne:K8JOFTGn9V7n78FX@metaverse-marketplace.pz6ft.mongodb.net/Videos?retryWrites=true&w=majority&appName=Metaverse-Marketplace");

const VideosSchema = new mongoose.Schema({
    title : String,
    url : String,
    platform : String,
    createdAt : {type : Date, default : Date.now}
});

export default mongoose.model("Videos", VideosSchema);

