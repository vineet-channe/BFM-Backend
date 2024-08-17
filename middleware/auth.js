import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config({path : '../config/.env'});

const authMiddleware = (req,res,next) => {
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer'))
    {
        const token = req.headers.authorization.split(' ')[1];
        try{
            const decoded = jwt.verify(token , process.env.JWT_SECRET);
            req.userId = decoded.userId; // userId = user._id where user is the database which contains user info (signup/sigin)
            next();

        } catch(err){
            return res.status(403).json({message : "Invalid token"});
        }
    }
}

export default authMiddleware;