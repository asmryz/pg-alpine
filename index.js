import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url"
import indexRouter from "./routes/index.js"
const app = express();
const PORT = process.env.PORT || 4500;

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')))
app.get("/", (req, res)=>res.sendFile(path.join(__dirname, 'index.html')))
app.use('/api', indexRouter);
app.listen(PORT, () => console.log(`Server is listening on http://localhost:${PORT}`));