import mongoose from "mongoose";

const NewsCategoriesSchema = new mongoose.Schema({
    title : String,
    news : [{type : mongoose.Schema.Types.ObjectId, ref : 'News'}]
});

export default mongoose.model("NewsCategories", NewsCategoriesSchema);
