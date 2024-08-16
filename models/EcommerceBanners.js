import mongoose from "mongoose";

mongoose.connect("mongodb+srv://vineetchanne:K8JOFTGn9V7n78FX@metaverse-marketplace.pz6ft.mongodb.net/EcommerceBanners?retryWrites=true&w=majority&appName=Metaverse-Marketplace");

const EcommerceBannersSchema = new mongoose.Schema({
    title : String,
    image : String,
    createdAt : {type : Date, default : Date.now}
});

export default mongoose.model("EcommerceBanners", EcommerceBannersSchema);
