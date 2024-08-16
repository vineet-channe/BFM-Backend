import Articles from "../models/Articles";

export const getArticles = async (req, res) =>{
    try{
        const articles = await Articles.findById(req.params.id);
    }
    catch(err){
        res.send(err);
    }
}

export const getAllArticles = (req, res) =>{
    
}

export const postArticles = (req, res) =>{
    
}

export const updateArticles = (req, res) =>{
    
}

export const deleteAtricles = (req, res) =>{
    
}