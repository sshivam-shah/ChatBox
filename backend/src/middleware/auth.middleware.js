import jwt from "jsonwebtoken";
import User from "../models/User.js";   


export const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;

        if(!token) return res.status(401).json({ message: "Unauthorized access - NO token provided" });

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        if(!decoded) return res.status(401).json({ message: "Unauthorized access - Invalid token" });

        const user = await User.findById(decoded.userId).select("-password"); // Exclude password and version field from the user object

        if(!user) return res.status(401).json({ message: "Unauthorized access - User not foudn" }); 

        req.user = user; // Attach user to the response object

        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        console.log("Error in protectRoute middleware:", error);
        res.status(500).json({ message: "Internal server error" }); 
        
    }
};
