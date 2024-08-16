import Metaverses from "../models/Metaverses";

export const getMetaverses = async (req, res) => {
    try {
        const metaverse = await Metaverses.findById(req.params.id);
        if (!metaverse) return res.status(404).json({ message: "Metaverse not found" });
        res.status(200).json(metaverse);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


export const getAllMetaverses = async (req, res) => {
    try {
        const metaverses = await Metaverses.find(); 
        res.status(200).json(metaverses);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


export const postMetaverses = async (req, res) => {
    try {
        const newMetaverse = await Metaverses.create(req.body);
        res.status(201).json(newMetaverse);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


export const updateMetaverses = async (req, res) => {
    try {
        const updatedMetaverse = await Metaverses.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        ); 
        if (!updatedMetaverse) return res.status(404).json({ message: "Metaverse not found" });
        res.status(200).json(updatedMetaverse);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


export const deleteMetaverses = async (req, res) => {
    try {
        const deletedMetaverse = await Metaverses.findByIdAndDelete(req.params.id); 
        if (!deletedMetaverse) return res.status(404).json({ message: "Metaverse not found" });
        res.status(200).json({ message: "Metaverse deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
