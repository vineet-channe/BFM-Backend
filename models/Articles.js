import mongoose from "mongoose";

const ArticlesSchema = new mongoose.Schema({
    title: String,
    source: String,
    link: String,
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Articles", ArticlesSchema);
