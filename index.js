
import { fileURLToPath } from 'url';
import path from "path";
import express from "express";
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "src")));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
