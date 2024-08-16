import mongoose from "mongoose";

const TopEcosystemLogosSchema = new mongoose.Schema({
    name : String,
    image : String,
    createdAt : {type : Date, default : Date.now}
});

export default mongoose.model("TopEcosystemLogos", TopEcosystemLogosSchema);
