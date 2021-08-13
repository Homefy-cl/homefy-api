import CommonExpenses from "../models/CommonExpenses.js";

// Create
export const createExpense = async (req, res) => {
	try {
		await CommonExpenses.create(req.body).then((x) => res.status(201).send(x));
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
};

// Read - All
export const getAllExpenses = async (req, res) => {
	try {
		await CommonExpenses.find()
			.exec()
			.then((x) => res.status(200).send(x));
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
};

// Read - One
export const getExpenseById = async (req, res) => {
	try {
		await CommonExpenses.findById(req.params.id)
			.exec()
			.then((x) => res.status(200).send(x));
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
};

// Update
export const updateExpense = (req, res) => {
	try {
		CommonExpenses.findOneAndUpdate(req.params.id, req.body).then(() => {
			res.sendStatus(204);
		});
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
};

// Delete
export const deleteExpense = (req, res) => {
	try {
		CommonExpenses.findOneAndDelete(req.params.id)
			.exec()
			.then(() => res.sendStatus(204));
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
};
