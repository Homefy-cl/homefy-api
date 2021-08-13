import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Sales = mongoose.model(
	"Sale",
	new Schema({
		title: String,
		desc: String,
		price: { type: Schema.Types.Number, default: 0 },
		id_community: { type: Schema.Types.ObjectId, ref: "Community" },
		id_user: String,
	})
);

export default Sales;
