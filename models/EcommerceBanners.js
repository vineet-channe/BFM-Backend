import mongoose from "mongoose";

const EcommerceBannersSchema = new mongoose.Schema({
    title : String,
    image : String,
    createdAt : {type : Date, default : Date.now}
});

export default mongoose.model("EcommerceBanners", EcommerceBannersSchema);
