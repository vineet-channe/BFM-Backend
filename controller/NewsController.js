import News from "../models/News";
export const getNews = async(req,res) => {
    try{
        const news = await News.findById(req.params.id);
        if(!news) return res.status(404).json({message : "News not found"});
    } catch(err){
        return res.status(500).json({message : err.message});
    }
};

export const getAllNews = async (req,res) => {
    try{
        const news = await News.find();
        res.status(200).json(news);
    } catch(err){
        res.status(500).json({message: err.message});
    }
};

export const postNews= async (req,res) => {
    try{
        const newnews = await News.create();
        res.status(201).json(newnews);
    } catch(err){
        res.status(500).json({message: err.message});
    }
};

export const updateNews = async (req,res) => {
    try{
        const updatednews = await News.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new : true}
        );
        if(!updatednews) return res.status(404).json({message : "News not found"});
        res.status(200).json(updatednews);
    } catch(err) {
        res.status(500).json({message : err.message});
    }
};

export const deleteNews = async (req,res) => {
    try{
        const deletednews = await News.findByIdAndDelete(req.params.id);
        if (!deletednews) return res.status(404).json({ message: "News not found" });
        res.status(200).json({ message: "Metaverse deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
  