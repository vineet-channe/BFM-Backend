import Articles from "../models/Articles";

export const getArticles = async (req, res) => {
    try {
        const article = await Articles.findById(req.params.id);
        if (!article) return res.status(404).json({ message: "Article not found" });
        res.status(200).json(article);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const getAllArticles = async (req, res) => {
    try {
        const articles = await Articles.find(); 
        res.status(200).json(articles);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


export const postArticles = async (req, res) => {
    try {
        const newArticle = await Articles.create(req.body);
        res.status(201).json(newArticle);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


export const updateArticles = async (req, res) => {
    try {
        const updatedArticle = await Articles.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        ); 
        if (!updatedArticle) return res.status(404).json({ message: "Article not found" });
        res.status(200).json(updatedArticle);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


export const deleteArticles = async (req, res) => {
    try {
        const deletedArticle = await Articles.findByIdAndDelete(req.params.id); // Deletes the article
        if (!deletedArticle) return res.status(404).json({ message: "Article not found" });
        res.status(200).json({ message: "Article deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
