import Metaverses from "../models/Metaverses.js";
import MetaverseCategories from "../models/MetaverseCategories.js";
import path from "path";
import mongoose from "mongoose";
import News from "../models/News.js";
import NewsCategories from "../models/NewsCategories.js";
import slugify from "slugify";

export const getMetaverses = async (req, res) => {
    try {
        console.log("getMetaverses: Fetching metaverse with slug:", req.params.slug);
        const metaverse = await Metaverses.findOne({slug : req.params.slug});
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

        const slug = slugify(title, { lower: true, strict: true });

        let categoryDoc = await MetaverseCategories.findOne({ title: category });
        if (!categoryDoc) {
            console.log("postMetaverses: Category not found, creating new category");
            categoryDoc = await MetaverseCategories.create({ title: category });
        } else {
            console.log("postMetaverses: Category found:", categoryDoc);
        }

        let newsDoc = await News.create({ title: news });

        let newscategoryDoc = await NewsCategories.findOne({ title: category });
        if (!newscategoryDoc) {
            console.log("postMetaverses: Category not found, creating new category");
            newscategoryDoc = await NewsCategories.create({ title: category });
        } else {
            console.log("postMetaverses: Category found:", newscategoryDoc);
        }

        const newMetaverse = await Metaverses.create({
            title,
            image,
            link,
            description,
            activeMembers,
            socials,
            category: categoryDoc._id,
            news: newsDoc._id,
            slug
        });
        
        // Log the new metaverse
        console.log("New Metaverse Created:", newMetaverse);

        try {
            const mydata = await MetaverseCategories.findByIdAndUpdate(
                categoryDoc._id,
                { $push: { metaverses: newMetaverse._id } },
                { new: true, useFindAndModify: false }
            );
            console.log("Update Result:", mydata);
        } catch (updateError) {
            console.error("Error updating category:", updateError.message);
        }

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
        const metaverseId = req.params.id;

        // Ensure the metaverseId is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(metaverseId)) {
            return res.status(400).json({ message: "Invalid Metaverse ID" });
        }

        console.log("deleteMetaverses: Deleting metaverse with ID:", metaverseId);

        // Delete the metaverse
        const deletedMetaverse = await Metaverses.findByIdAndDelete(metaverseId);

        // Remove the metaverse ID from the metaverses array in MetaverseCategories
        await MetaverseCategories.updateMany(
            { metaverses: mongoose.Types.ObjectId(metaverseId) }, // Find categories containing the metaverse ID
            { $pull: { metaverses: mongoose.Types.ObjectId(metaverseId) } } // Remove the ID from the array
        );

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

