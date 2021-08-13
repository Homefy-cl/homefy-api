import express from "express";
import { register, login, profileInfo } from "../controllers/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile", profileInfo)

export default router;
