import express from "express";
const app = express();
import { db } from "./db.js";


app.use(express.json())

app.get("/", async (req, res) => {
    const result = await db.query(`SELECT * FROM emp;`);
    res.status(200).json(result);
    //res.json({ info: "Node.js, Express, and Postgres API" });
});


app.listen(process.env.PORT, () => {
    console.log(`App running on port ${process.env.PORT}.`);
});