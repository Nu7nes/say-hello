import "dotenv/config.js";
import { fileURLToPath } from "url";
import path from "path";
import mongoose from "mongoose";
import apiRoute from "./src/routes/api.js"
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
db.once("open", () => { console.log("Connected to MongoDB") });

app.use('/api', apiRoute)
app.use(express.static(path.join(__dirname, "client")));

app.listen(process.env.PORT ? Number(process.env.PORT) : 3333, () => {
	console.log("Server is running");
});
