import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to DB1'))
    .catch(err => console.error('Error connecting to DB1:', err));

const FooterContentSchema = new mongoose.Schema({
    socialMediaHandles : [{type : String}],
    logo : String,
    termsAndConditions : String,
    privacyPolicy : String
});

export default mongoose.model("FooterContent", FooterContentSchema);