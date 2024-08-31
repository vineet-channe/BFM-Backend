import Metaverses from "../models/Metaverses.js";
import MetaverseCategories from "../models/MetaverseCategories.js";
import path from "path";

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

        const { title, link, description, activeMembers, socials, category, news } = req.body;
        const image = req.file ? req.file.path : ''; 
        const newsArray = JSON.parse(news);
        let categoryDoc = await MetaverseCategories.findOne({ title: category });
        
        if (!categoryDoc) {
            // If the category doesn't exist, create a new one
            categoryDoc = await MetaverseCategories.create({ title: [category] });
        }
        const newMetaverse = await Metaverses.create({
            title,
            image,
            link,
            description,
            activeMembers,
            socials, 
            category,
            news: newsArray,
        });
        console.log(req.body);
        console.log(req.file);
        res.status(201).json({
            message: "Metaverse created successfully",
            data: newMetaverse,
        });
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
