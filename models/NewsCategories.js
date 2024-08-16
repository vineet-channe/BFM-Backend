import mongoose from "mongoose";

mongoose.connect("mongodb+srv://vineetchanne:K8JOFTGn9V7n78FX@metaverse-marketplace.pz6ft.mongodb.net/NewsCategories?retryWrites=true&w=majority&appName=Metaverse-Marketplace");
const NewsCategoriesSchema = new mongoose.Schema({
    title : String,
    news : [{type : mongoose.Schema.Types.ObjectId, ref : 'News'}]
});

export default mongoose.model("NewsCategories", NewsCategoriesSchema);
