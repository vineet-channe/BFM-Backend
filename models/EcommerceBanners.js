const mongoose = require("mongoose");

const EcommerceBannersSchema = new mongoose.Schema({
    title : String,
    image : String,
    createdAt : {type : Date, default : Date.now}
});

module.exports = mongoose.model("EcommerceBanners",EcommerceBannersSchema);