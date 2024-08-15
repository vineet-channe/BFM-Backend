const mongoose = require("mongoose");

const NewsCategoriesSchema = new mongoose.Schema({
    title : String,
    news : [{type : mongoose.Schema.Types.ObjectId, ref : 'News'}]
});

module.exports = mongoose.model("NewsCategories",NewsCategoriesSchema);