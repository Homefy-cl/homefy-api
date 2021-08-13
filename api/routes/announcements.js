import express from "express";
import { isAuthenticated, hasRoles } from "../auth/index.js";
import {
	getAnnouncement,
	getAnnouncementById,
	updateAnnouncement,
	createAnnouncement,
	deleteAnnouncement,
} from "../controllers/announcements.js";

const router = express.Router();

router.get("/", getAnnouncement);
router.get("/:id", getAnnouncementById);
router.post("/", isAuthenticated, hasRoles(["admin"]), createAnnouncement);
router.put("/:id", isAuthenticated, hasRoles(["admin"]), updateAnnouncement);
router.delete("/:id", isAuthenticated, hasRoles(["admin"]), deleteAnnouncement);

export default router;
