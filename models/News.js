import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to DB1'))
    .catch(err => console.error('Error connecting to DB1:', err));

const NewsSchema = new mongoose.Schema({
    title : String,
    link : String,
    metaverse : {type : mongoose.Schema.Types.ObjectId , ref : "Metaverses"}
});

export default mongoose.model("News", NewsSchema);
