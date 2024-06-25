import { Pool } from "pg";

export class DatabaseService {
    private static dbPool: Pool | null = null;

    constructor() {
        if (DatabaseService.dbPool == null) {
            this.initPool();
        }
    }

    private initPool = (): Pool => {
        DatabaseService.dbPool = new Pool({
            host: process.env.DATABASE_HOST,
            user: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE_NAME,
            max: 50,
            idleTimeoutMillis: 30000,
            connectionTimeoutMillis: 2000,
            port: 5432,
        });
        return DatabaseService.dbPool;
    }

    public get pool(): Pool {
        if (DatabaseService.dbPool == null) {
            return this.initPool();
        } else {
            return DatabaseService.dbPool;
        }
    }

    executeQuery = async (query: string, values: Array<string | number | boolean>) => {
        const results = await this.pool.query(query, values);
        return results;
    }
}