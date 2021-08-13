import mongoose from "mongoose";
const Schema = mongoose.Schema;

const SaleImages = mongoose.model(
	"SaleImage",
	new Schema({
		url: String,
		id_sale: { type: Schema.Types.ObjectId, ref: "Sale" },
	})
);

export default SaleImages;
