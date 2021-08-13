import SaleImages from "../models/SaleImages.js";

// Create
export const createSaleImage = async (req, res) => {
	try {
		await SaleImages.create(req.body).then((x) => res.status(201).send(x));
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
};

// Read - All
export const getAllSaleImages = async (req, res) => {
	try {
		await SaleImages.find()
			.exec()
			.then((x) => res.status(200).send(x));
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
};

// Read - One
export const getSaleImageById = async (req, res) => {
	try {
		await SaleImages.findById(req.params.id)
			.exec()
			.then((x) => res.status(200).send(x));
	} catch (err) {
		res.status(404).json({ message: res.message });
	}
};

// Update
export const updateSaleImage = (req, res) => {
	try {
		SaleImages.findOneAndUpdate(req.params.id, req.body).then(() => {
			res.sendStatus(204);
		});
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
};

// Delete
export const deleteSaleImage = (req, res) => {
	try {
		SaleImages.findOneAndDelete(req.params.id)
			.exec()
			.then(() => res.sendStatus(204));
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
};
