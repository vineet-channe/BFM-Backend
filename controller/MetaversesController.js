import Metaverses from "../models/Metaverses.js";
import MetaverseCategories from "../models/MetaverseCategories.js";
import path from "path";

export const getMetaverses = async (req, res) => {
    try {
        console.log("getMetaverses: Fetching metaverse with ID:", req.params.id);
        const metaverse = await Metaverses.findById(req.params.id);
        if (!metaverse) {
            console.log("getMetaverses: Metaverse not found");
            return res.status(404).json({ message: "Metaverse not found" });
        }
        console.log("getMetaverses: Metaverse found:", metaverse);
        res.status(200).json(metaverse);
    } catch (err) {
        console.error("getMetaverses: Error fetching metaverse:", err.message);
        res.status(500).json({ message: err.message });
    }
};

export const getAllMetaverses = async (req, res) => {
    try {
        console.log("getAllMetaverses: Fetching all metaverses");
        const metaverses = await Metaverses.find();
        console.log("getAllMetaverses: Metaverses found:", metaverses);
        res.status(200).json(metaverses);
    } catch (err) {
        console.error("getAllMetaverses: Error fetching metaverses:", err.message);
        res.status(500).json({ message: err.message });
    }
};

export const postMetaverses = async (req, res) => {
    try {
        console.log("postMetaverses: Creating a new metaverse");
        const { title, link, description, activeMembers, socials, category, news } = req.body;
        const image = req.file ? req.file.path : '';
        console.log("postMetaverses: Received data:", req.body);
        console.log("postMetaverses: Received file:", req.file);

        let categoryDoc = await MetaverseCategories.findOne({ title: category });
        if (!categoryDoc) {
            console.log("postMetaverses: Category not found, creating new category");
            categoryDoc = await MetaverseCategories.create({ title: category });
        } else {
            console.log("postMetaverses: Category found:", categoryDoc);
        }

        const newMetaverse = await Metaverses.create({
            title,
            image,
            link,
            description,
            activeMembers,
            socials,
            category: categoryDoc._id, // Link the category's ID
            news
        });
        console.log("postMetaverses: Metaverse created:", newMetaverse);
        res.status(201).json({
            message: "Metaverse created successfully",
            data: newMetaverse,
        });
    } catch (err) {
        console.error("postMetaverses: Error creating metaverse:", err.message);
        res.status(500).json({ message: err.message });
    }
};

export const updateMetaverses = async (req, res) => {
    try {
        console.log("updateMetaverses: Updating metaverse with ID:", req.params.id);
        console.log("updateMetaverses: Update data:", req.body);
        const updatedMetaverse = await Metaverses.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedMetaverse) {
            console.log("updateMetaverses: Metaverse not found");
            return res.status(404).json({ message: "Metaverse not found" });
        }
        console.log("updateMetaverses: Metaverse updated:", updatedMetaverse);
        res.status(200).json(updatedMetaverse);
    } catch (err) {
        console.error("updateMetaverses: Error updating metaverse:", err.message);
        res.status(500).json({ message: err.message });
    }
};

export const deleteMetaverses = async (req, res) => {
    try {
        console.log("deleteMetaverses: Deleting metaverse with ID:", req.params.id);
        const deletedMetaverse = await Metaverses.findByIdAndDelete(req.params.id);
        if (!deletedMetaverse) {
            console.log("deleteMetaverses: Metaverse not found");
            return res.status(404).json({ message: "Metaverse not found" });
        }
        console.log("deleteMetaverses: Metaverse deleted");
        res.status(200).json({ message: "Metaverse deleted successfully" });
    } catch (err) {
        console.error("deleteMetaverses: Error deleting metaverse:", err.message);
        res.status(500).json({ message: err.message });
    }
};
