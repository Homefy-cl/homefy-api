import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import sales from "./routes/sales.js";
import communities from "./routes/communities.js";
import salesImages from "./routes/saleImages.js";
import announcements from "./routes/announcements.js";
import commonExpenses from "./routes/commonExpenses.js";
import invites from "./routes/invites.js";
import auth from "./routes/auth.js";

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
mongoose
	.connect(MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
	})
	.catch((err) => {
		console.log(err.message);
	});

mongoose.set("useFindAndModify", false);

app.use("/api/sales", sales);
app.use("/api/communities", communities);
app.use("/api/salesImages", salesImages);
app.use("/api/announcements", announcements);
app.use("/api/commonExpenses", commonExpenses);
app.use("/api/invites", invites);
app.use("/api/auth", auth);

export default app;
