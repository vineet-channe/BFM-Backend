import mongoose from "mongoose";

mongoose.connect("mongodb+srv://vineetchanne:K8JOFTGn9V7n78FX@metaverse-marketplace.pz6ft.mongodb.net/TopEcosystemLogos?retryWrites=true&w=majority&appName=Metaverse-Marketplace");

const TopEcosystemLogosSchema = new mongoose.Schema({
    name : String,
    image : String,
    createdAt : {type : Date, default : Date.now}
});

export default mongoose.model("TopEcosystemLogos", TopEcosystemLogosSchema);
