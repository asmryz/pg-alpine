import express from "express";
const router = express.Router();
import { sql } from "../db.js"

router.get('/courses', async (req, res) => {
    try {
        const courses = await sql`SELECT * FROM course ORDER BY course_id`;
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
        res.status(200).json({ course, depts });
    } catch (err) { res.status(500).send(err.message); }
});

router.post('/courses/save', async (req, res) => {
    console.log(req.body)
    const { course_id, title, dept_name, credits } = req.body
    try {
        const result = await sql`UPDATE course SET title = ${title}, dept_name = ${dept_name}, credits  = ${credits} WHERE course_id = ${course_id} RETURNING *;`;
        const courses = await sql`SELECT * FROM course ORDER BY course_id`;
        res.status(200).json(courses);
    } catch (err) { res.status(500).send(err.message); }
});


export default router;