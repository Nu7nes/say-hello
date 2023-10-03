import "dotenv/config.js";
import { fileURLToPath } from "url";
import path from "path";
import mongoose from "mongoose";
import express from "express";
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

mongoose.connect(process.env.MONGO_CONNECTION_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
	console.log("Connected to MongoDB");
});

app.use(express.static(path.join(__dirname, "src")));

app.listen(3000, () => {
	console.log("Server is running on port 3000");
});
