import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to DB1'))
    .catch(err => console.error('Error connecting to DB1:', err));

const ArticlesSchema = new mongoose.Schema({
    title: String,
    source: String,
    link: String,
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Articles", ArticlesSchema);
