const mongoose = require("mongoose");

const VideosSchema = new mongoose.Schema({
    title : String,
    url : String,
    platform : String,
    createdAt : {type : Date, default : Date.now}
});

module.exports = mongoose.model("Videos",VideosSchema);