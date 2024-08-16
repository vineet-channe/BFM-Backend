import Videos from "../models/Videos";

export const getVideos = async (req, res) => {
    try {
        const video = await Videos.findById(req.params.id);
        if (!video) return res.status(404).json({ message: "Video not found" });
        res.status(200).json(video);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


export const getAllVideos = async (req, res) => {
    try {
        const videos = await Videos.find(); 
        res.status(200).json(videos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


export const postVideos = async (req, res) => {
    try {
        const newVideo = await Videos.create(req.body); 
        res.status(201).json(newVideo);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


export const updateVideos = async (req, res) => {
    try {
        const updatedVideo = await Videos.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        ); 
        if (!updatedVideo) return res.status(404).json({ message: "Video not found" });
        res.status(200).json(updatedVideo);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const deleteVideos = async (req, res) => {
    try {
        const deletedVideo = await Videos.findByIdAndDelete(req.params.id); 
        if (!deletedVideo) return res.status(404).json({ message: "Video not found" });
        res.status(200).json({ message: "Video deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
