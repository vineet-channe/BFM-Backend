const mongoose = require("mongoose");

const TopEcosystemLogosSchema = new mongoose.Schema({
    name : String,
    image : String,
    createdAt : {type : Date, default : Date.now}
});

module.exports = mongoose.model("TopEcosystemLogos",TopEcosystemLogosSchema);