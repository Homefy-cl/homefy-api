import express from "express";
import { isAuthenticated } from "../auth/index.js";
import {
	createSaleImage,
	getAllSaleImages,
	getSaleImageById,
	updateSaleImage,
	deleteSaleImage,
} from "../controllers/saleImages.js";

const router = express.Router();

router.get("/", getAllSaleImages);
router.get("/:id", getSaleImageById);
router.post("/", isAuthenticated, createSaleImage);
router.put("/:id", isAuthenticated, updateSaleImage);
router.delete("/:id", isAuthenticated, deleteSaleImage);

export default router;
