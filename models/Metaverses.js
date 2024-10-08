import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to DB1'))
    .catch(err => console.error('Error connecting to DB1:', err));

const MetaversesSchema = new mongoose.Schema({
    title: String,
    image: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    link: String,
    description: String,
    activeMembers: Number,
    slug: { type: String, unique: true },
    socials: [{type: String}],
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'MetaverseCategories' },
    news: [{type:String}]
});

export default mongoose.model('Metaverses', MetaversesSchema);
