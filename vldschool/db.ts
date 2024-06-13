import { Pool } from "pg";

export class DatabaseService {
    private static instance: DatabaseService;
    private dbPool: Pool | null = null;

    constructor() {
        this.init();
    }

    private init = (): Pool => {
        this.dbPool = new Pool({
            host: process.env.DATABASE_HOST,
            user: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE_NAME,
            max: 50,
            idleTimeoutMillis: 30000,
            connectionTimeoutMillis: 2000,
            port: 5432,
        });
        return this.dbPool;
    }

    public get pool(): Pool {
        if (this.dbPool == null) {
            return this.init();
        } else {
            return this.dbPool;
        }
    }

    executeQuery = async (query: string, values: Array<string | number | boolean>) => {
        const results = await this.pool.query(query, values);
        return results;
    }
}