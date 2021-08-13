import express from "express";
import { isAuthenticated } from "../auth/index.js";
import {
	createCommunity,
	findCommunityById,
	findAllCommunities,
	updateCommunity,
	deleteCommunity,
} from "../controllers/communities.js";

const router = express.Router();

router.get("/", findAllCommunities);
router.get("/:id", findCommunityById);
router.post("/", isAuthenticated, createCommunity);
router.put("/:id", isAuthenticated, updateCommunity);
router.delete("/:id", isAuthenticated, deleteCommunity);

export default router;
