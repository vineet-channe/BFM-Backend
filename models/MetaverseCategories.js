import mongoose from "mongoose";

const MetaverseCategoriesSchema = new mongoose.Schema({
    title : String,
    metaverses  : [{type : mongoose.Schema.Types.ObjectId, ref : 'Metaverse'}]
});

export default mongoose.model("MetaverseCategories", MetaverseCategoriesSchema);

