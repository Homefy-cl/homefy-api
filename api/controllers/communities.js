import Communities from "../models/Communities.js";

// Create
export const createCommunity = async (req, res) => {
	try {
		await Communities.create(req.body).then((x) => res.status(201).send(x));
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
};

// Read - All
export const findAllCommunities = async (req, res) => {
	try {
		await Communities.find()
			.exec()
			.then((x) => res.status(200).send(x));
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
};

// Read - One;
export const findCommunityById = async (req, res) => {
	try {
		await Communities.findById(req.params.id)
			.exec()
			.then((x) => res.status(200).send(x));
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
};

// Update
export const updateCommunity = (req, res) => {
	try {
		Communities.findOneAndUpdate(req.params.id, req.body).then(() => {
			res.sendStatus(204);
		});
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
};

// Delete
export const deleteCommunity = (req, res) => {
	try {
		Communities.findOneAndDelete(req.params.id)
			.exec()
			.then(() => res.sendStatus(204));
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
};
