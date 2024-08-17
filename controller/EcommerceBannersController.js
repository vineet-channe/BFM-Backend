import EcommerceBanners from "../models/EcommerceBanners.js";

export const postEcommerceBanners = async (req,res)=>{
    try
    {
        const newBanner = await EcommerceBanners.create(req.body);
        res.status(201).json(newBanner);
    }
    catch(err)
    {
        res.status(500).json({message: err.message});
    }
}

export const getAllEcommerceBanners = async (req, res) => {
    try {
        const banners = await EcommerceBanners.find();
        res.status(200).json(banners);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const updateEcommerceBanners = async (req, res) => {
    try {
        const updatedBanner = await EcommerceBanners.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true }
        );
        res.status(200).json(updatedBanner);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


export const deleteEcommerceBanners = async (req, res) => {
    try {
        await EcommerceBanners.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Banner deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


