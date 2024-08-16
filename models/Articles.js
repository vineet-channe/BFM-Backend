import mongoose from "mongoose";

mongoose.connect("mongodb+srv://vineetchanne:K8JOFTGn9V7n78FX@metaverse-marketplace.pz6ft.mongodb.net/Articles?retryWrites=true&w=majority&appName=Metaverse-Marketplace");

const ArticlesSchema = new mongoose.Schema({
    title: String,
    source: String,
    link: String,
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Articles", ArticlesSchema);
