import pg from "pg";
const { Pool } = pg;
import dotenv from "dotenv";
dotenv.config();

export const db = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },
});

// export const db = new Pool({
//     user: 'asim',
//     host: '192.168.100.135',
//     database: 'asim',
//     password: 'welcome123',
//     port: 5432,
//     options: "-c search_path=exams",
// });