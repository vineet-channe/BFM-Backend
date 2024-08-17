import MetaverseCategories from "../models/MetaverseCategories.js";

export const getMetaverseCategories = async (req, res) => {
    try {
        const category = await MetaverseCategories.findById(req.params.id); 
        if (!category) return res.status(404).json({ message: "Category not found" });
        res.status(200).json(category);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


export const getAllMetaverseCategories = async (req, res) => {
    try {
        const categories = await MetaverseCategories.find(); 
        res.status(200).json(categories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const postMetaverseCategories = async (req, res) => {
    try {
        const newCategory = await MetaverseCategories.create(req.body); 
        res.status(201).json(newCategory);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


export const updateMetaverseCategories = async (req, res) => {
    try {
        const updatedCategory = await MetaverseCategories.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        ); 
        if (!updatedCategory) return res.status(404).json({ message: "Category not found" });
        res.status(200).json(updatedCategory);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


export const deleteMetaverseCategories = async (req, res) => {
    try {
        const deletedCategory = await MetaverseCategories.findByIdAndDelete(req.params.id);
        if (!deletedCategory) return res.status(404).json({ message: "Category not found" });
        res.status(200).json({ message: "Category deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


