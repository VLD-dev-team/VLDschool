import { DatabaseService } from "@/db";

export async function getAccountByEmail(email: string): Promise<User | null> {
    const results = await new DatabaseService().executeQuery("SELECT * FROM accounts WHERE email = ? ;", [email]);

    if (results.rowCount == 0) {
        return null;
    }

    const user = new User(
        results.rows[0]['email'],
        results.rows[0]['username'],
        results.rows[0]['hashedPassword'],
    );

    return user;
}