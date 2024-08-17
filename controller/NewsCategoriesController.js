import NewsCategories from "../models/NewsCategories.js";

export const getNewsCategories = async (req, res) => {
    try {
        const category = await NewsCategories.findById(req.params.id);
        if (!category) return res.status(404).json({ message: "Category not found" });
        res.status(200).json(category);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const getAllNewsCategories = async (req, res) => {
    try {
        const categories = await NewsCategories.find();
        res.status(200).json(categories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const postNewsCategories = async (req, res) => {
    try {
        const newCategory = await NewsCategories.create(req.body);
        res.status(201).json(newCategory);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const updateNewsCategories = async (req, res) => {
    try {
        const updatedCategory = await NewsCategories.findByIdAndUpdate(
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

export const deleteNewsCategories = async (req, res) => {
    try {
        const deletedCategory = await NewsCategories.findByIdAndDelete(req.params.id);
        if (!deletedCategory) return res.status(404).json({ message: "Category not found" });
        res.status(200).json({ message: "Category deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
