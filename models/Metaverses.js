import mongoose from "mongoose";

const MetaversesSchema = new mongoose.Schema({
    title: String,
    image: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    link: String,
    description: String,
    views: Number,
    likes: Number,
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'MetaverseCategory' },
    news: [{ type: mongoose.Schema.Types.ObjectId, ref: 'News' }]
});

export default mongoose.model('Metaverses', MetaversesSchema);
