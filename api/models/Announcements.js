import mongoose from "mongoose"
const Schema = mongoose.Schema;

const Announcements = mongoose.model(
	"Announcement",
	new Schema({
		title: String,
		desc: String,
		id_community: { type: Schema.Types.ObjectId, ref: "Community" },
	})
);

export default Announcements;
