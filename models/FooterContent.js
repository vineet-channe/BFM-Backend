import mongoose from "mongoose";

mongoose.connect("mongodb+srv://vineetchanne:K8JOFTGn9V7n78FX@metaverse-marketplace.pz6ft.mongodb.net/FooterContent?retryWrites=true&w=majority&appName=Metaverse-Marketplace");

const FooterContentSchema = new mongoose.Schema({
    socialMediaHandles : [{type : String}],
    logo : String,
    termsAndConditions : String,
    privacyPolicy : String
});

export default mongoose.model("FooterContent", FooterContentSchema);