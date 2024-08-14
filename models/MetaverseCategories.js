const mongoose = require("mongoose");

const MetaverseCategoriesSchema = new mongoose.Schema({
    title : String,
    metaverses  : [{type : mongoose.Schema.Types.ObjectId, ref : 'Metaverse'}]
});

module.exports = mongoose.model("MetaverseCategories", MetaverseCategorySchema);
