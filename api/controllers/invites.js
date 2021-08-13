import Invites from "../models/Invites.js";

// Create
export const createInvite = async (req, res) => {
	try {
		await Invites.create(req.body).then((x) => res.status(201).send(x));
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
};

// Read - All
export const getAllInvites = async (req, res) => {
	try {
		await Invites.find()
			.exec()
			.then((x) => res.status(200).send(x));
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
};

// Read - One
export const getInviteById = async (req, res) => {
	try {
		await Invites.findById(req.params.id)
			.exec()
			.then((x) => res.status(200).send(x));
	} catch (err) {
		res.status(404);
	}
};

// Update
export const updateInvite = (req, res) => {
	try {
		Invites.findOneAndUpdate(req.params.id, req.body).then(() => {
			res.sendStatus(204);
		});
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
};

// Delete
export const deleteInvite = (req, res) => {
	try {
		Invites.findOneAndDelete(req.params.id)
			.exec()
			.then(() => res.sendStatus(204));
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
};
