const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema({
    title : String,
    link : String,
    metaverse : {type : mongoose.Schema.Types.ObjectId , ref : "Metaverses"}
});

module.exports = mongoose.model("News",NewsSchema);