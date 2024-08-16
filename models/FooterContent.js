import mongoose from "mongoose";

const FooterContentSchema = new mongoose.Schema({
    socialMediaHandles : [{type : String}],
    logo : String,
    termsAndConditions : String,
    privacyPolicy : String
});

export default mongoose.model("FooterContent", FooterContentSchema);