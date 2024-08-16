import mongoose from "mongoose";

mongoose.connect("mongodb+srv://vineetchanne:K8JOFTGn9V7n78FX@metaverse-marketplace.pz6ft.mongodb.net/MetaverseCategories?retryWrites=true&w=majority&appName=Metaverse-Marketplace");

const MetaverseCategoriesSchema = new mongoose.Schema({
    title : String,
    metaverses  : [{type : mongoose.Schema.Types.ObjectId, ref : 'Metaverse'}]
});

export default mongoose.model("MetaverseCategories", MetaverseCategoriesSchema);

