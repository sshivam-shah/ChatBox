import express from "express";
import { login, lougout, onboard, signup } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", lougout);

router.post("/onboarding", protectRoute, onboard);

// check is user is logged in
router.get("/me", protectRoute, (req, res) => {
    res.status(200).json({ user: req.user });
});

export default router; 