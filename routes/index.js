import express from "express";
const router = express.Router();
import { sql } from "../db.js"

router.get('/courses', async (req, res) => {
    try {
        const courses = await sql`SELECT * FROM course`;
        res.status(200).json(courses);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

router.get('/depts/:name', async (req, res) => {
    try {
        const dept = await sql`SELECT * FROM department WHERE dept_name = ${req.params.name}`;
        res.status(200).json(dept);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

router.get('/courses/:id', async (req, res) => {
    try {
        const course = await sql`SELECT * FROM course WHERE course_id = ${req.params.id}`;
        const depts = await sql`SELECT * FROM department`;
        res.status(200).json({course, depts});
    } catch (err) {
        res.status(500).send(err.message);
    }
});


export default router;