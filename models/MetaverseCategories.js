import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to DB1'))
    .catch(err => console.error('Error connecting to DB1:', err));

const MetaverseCategoriesSchema = new mongoose.Schema({
    title : {type : String},
    metaverses  : [{type : mongoose.Schema.Types.ObjectId, ref : 'Metaverse'}]
});

export default mongoose.model("MetaverseCategories", MetaverseCategoriesSchema);

