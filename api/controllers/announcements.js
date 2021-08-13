import Announcements from "../models/Announcements.js";

// Create
export const createAnnouncement = async (req, res) => {
	try {
		const { _id } = req.user;
		await Announcements.create({ ...req.body, user_id: _id }).then((x) =>
			res.status(201).send(x)
		);
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
};

// Read - All
export const getAnnouncement = async (req, res) => {
	try {
		await Announcements.find()
			.exec()
			.then((x) => res.status(200).send(x));
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
};

// Read - One
export const getAnnouncementById = async (req, res) => {
	try {
		await Announcements.findById(req.params.id)
			.exec()
			.then((x) => {
				res.status(200).send(x);
			});
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
};

// Update
export const updateAnnouncement = (req, res) => {
	try {
		Announcements.findOneAndUpdate(req.params.id, req.body).then(() => {
			res.sendStatus(204);
		});
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
};

// Delete
export const deleteAnnouncement = (req, res) => {
	try {
		Announcements.findOneAndDelete(req.params.id)
			.exec()
			.then(() => res.sendStatus(204));
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
};
