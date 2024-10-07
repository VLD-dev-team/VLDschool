import { Pool } from "pg";

export const pgpool = new Pool({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    max: 50,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
    port: 5432,
});

export default async function executeQuery(query: string, values: Array<string | number | boolean>) {
    const results = await pgpool.query(query, values);
    return results;
}