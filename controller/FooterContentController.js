import FooterContent from "../models/FooterContent.js";

export const getFooterContent = async (req,res)=>{
    try{
        const footercontent = await FooterContent.find();
        res.status(200).json(footercontent);
    } catch(err){
        res.status(500).json({message : err.message}); 
    }   
};

export const postFooterContent = async (req,res)=>{
    try{
        const newfootercontent = await FooterContent.create(req.body);
        res.status(201).json(newfootercontent);
    } catch(err){
        res.status(500).json({message : err.message});
    }
};