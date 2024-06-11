import { Pool } from "pg";

const pool = new Pool({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    max: 50,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
});

export const executeQuery = async (query: string, values: Array<string | number | boolean>) => {
    const results = await pool.query(query, values);
    return results;
}

export const getPool = (): Pool => {
    return pool;
}