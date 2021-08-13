import mongoose from "mongoose"
const Schema = mongoose.Schema;

const CommonExpenses = mongoose.model(
	"CommonExpense",
	new Schema({
		desc: String,
		price: { type: Schema.Types.Number },
		dueDate: Date,
		id_community: { type: Schema.Types.ObjectId, ref: "Community" },
		id_user: String,
	})
);

export default CommonExpenses;
