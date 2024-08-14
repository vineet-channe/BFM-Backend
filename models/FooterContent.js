const mongoose = require("mongoose");

const FooterContentSchema = new mongoose.Schema({
    socialMediaHandles : [{type : String}],
    logo : String,
    termsAndConditions : String,
    privacyPolicy : String
});

mongoose.model = mongoose.model("FooterContent",FooterContentSchema);