import mongoose from "mongoose";

mongoose.connect("mongodb+srv://vineetchanne:K8JOFTGn9V7n78FX@metaverse-marketplace.pz6ft.mongodb.net/News?retryWrites=true&w=majority&appName=Metaverse-Marketplace");

const NewsSchema = new mongoose.Schema({
    title : String,
    link : String,
    metaverse : {type : mongoose.Schema.Types.ObjectId , ref : "Metaverses"}
});

export default mongoose.model("News", NewsSchema);
