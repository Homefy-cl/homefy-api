import express from "express";
import { isAuthenticated } from "../auth/index.js";
import {
	createSale,
	getAllSales,
	getSaleById,
	updateSale,
	deleteSale,
} from "../controllers/sales.js";

const router = express.Router();

router.get("/", getAllSales);
router.get("/:id", getSaleById);
router.post("/", isAuthenticated, createSale);
router.put("/:id", isAuthenticated, updateSale);
router.delete("/:id", isAuthenticated, deleteSale);

export default router;
