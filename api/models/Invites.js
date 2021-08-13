import mongoose from "mongoose"
const Schema = mongoose.Schema;

const Invites = mongoose.model(
	"Invite",
	new Schema({
		name: String,
		token: String,
		id_community: { type: Schema.Types.ObjectId, ref: "Community" },
	})
);

export default Invites;
