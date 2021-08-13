import Sales from "../models/Sales.js";

// Create
export const createSale = async (req, res) => {
	try {
		await Sales.create(req.body).then((x) => res.status(201).send(x));
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
};

// Read - All
export const getAllSales = async (req, res) => {
	try {
		await Sales.find()
			.exec()
			.then((x) => res.status(200).send(x));
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
};

// Read - One
export const getSaleById = async (req, res) => {
	try {
		await Sales.findById(req.params.id)
			.exec()
			.then((x) => res.status(200).send(x));
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
};

// Update
export const updateSale = (req, res) => {
	try {
		Sales.findOneAndUpdate(req.params.id, req.body).then(() => {
			res.sendStatus(204);
		});
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
};

// Delete
export const deleteSale = (req, res) => {
	try {
		Sales.findOneAndDelete(req.params.id)
			.exec()
			.then(() => res.sendStatus(204));
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
};
