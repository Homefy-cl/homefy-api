import express from "express";
import { isAuthenticated } from "../auth/index.js";
import {
	createInvite,
	getAllInvites,
	getInviteById,
	updateInvite,
	deleteInvite,
} from "../controllers/invites.js";

const router = express.Router();

router.get("/", getAllInvites);
router.get("/:id", getInviteById);
router.post("/", isAuthenticated, createInvite);
router.put("/:id", isAuthenticated, updateInvite);
router.delete("/:id", isAuthenticated, deleteInvite);

export default router;
