import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Communities = mongoose.model(
	"Community",
	new Schema({
		name: String,
		direction: String,
	})
);

export default Communities;
