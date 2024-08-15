const mongoose = require("mongoose");

const ArticlesSchema = new mongoose.Schema({
    title: String,
    source : String,
    link : String,
    createdAt : {type : Date, default : Date.now}
});

module.exports = mongoose.model("Articles",ArticlesSchema);