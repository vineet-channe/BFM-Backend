import TopEcosystemLogos from "../models/TopEcosystemLogos";

export const getAllTopEcosystemLogos = async (req, res) => {
    try {
        const logos = await TopEcosystemLogos.find();
        res.status(200).json(logos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const postTopEcosystemLogos = async (req, res) => {
    try {
        const newLogo = await TopEcosystemLogos.create(req.body);
        res.status(201).json(newLogo);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const updateTopEcosystemLogos = async (req, res) => {
    try {
        const updatedLogo = await TopEcosystemLogos.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedLogo) return res.status(404).json({ message: "Logo not found" });
        res.status(200).json(updatedLogo);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const deleteTopEcosystemLogos = async (req, res) => {
    try {
        const deletedLogo = await TopEcosystemLogos.findByIdAndDelete(req.params.id);
        if (!deletedLogo) return res.status(404).json({ message: "Logo not found" });
        res.status(200).json({ message: "Logo deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
