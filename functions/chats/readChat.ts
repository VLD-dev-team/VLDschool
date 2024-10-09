"use server";

import executeQuery from "@/db";

export default async function readChat(chatID: number, userID: number): Promise<boolean> {

    try {
        
        const query = `INSERT INTO chatreadedby ("chatID", "userID") VALUES ($1, $2);`
        await executeQuery(query, [chatID, userID]);
        return true;

    } catch (error) {
        throw error
    }

}