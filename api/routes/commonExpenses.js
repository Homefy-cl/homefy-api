import express from "express";
import { isAuthenticated } from "../auth/index.js";
import {
	createExpense,
	getAllExpenses,
	getExpenseById,
	updateExpense,
	deleteExpense,
} from "../controllers/commonExpenses.js";

const router = express.Router();

router.get("/", getAllExpenses);
router.get("/:id", getExpenseById);
router.post("/", isAuthenticated, createExpense);
router.put("/:id", isAuthenticated, updateExpense);
router.delete("/:id", isAuthenticated, deleteExpense);

export default router;
