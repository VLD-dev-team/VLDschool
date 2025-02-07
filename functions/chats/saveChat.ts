"use server";

import executeQuery from "@/db";
import { Attachement, Chat } from "@/types/chat";

export default async function saveChat(roomID: number, userID: number, textContent: string, responseTo: number | null, attachements: Attachement[] | null): Promise<Chat | null> {

    try {

        const addMessageQuery = `
            INSERT into chats ("chatRoomID", author, "textContent", "ResponseTo_chatID")
            VALUES ($1, $2, $3, $4) 
            RETURNING * 
        ;`;
        var results = await executeQuery(addMessageQuery, [roomID, userID, textContent, responseTo ?? "NULL"]);

        if (attachements) {
            // TODO: Implémenter les pièces jointes
        }

        return {
            chatID: results.rows[0].chatID,
            chatRoomID: results.rows[0].chatRoomID,
            sendDate: results.rows[0].sendDate,
            author: results.rows[0].author,
            textContent: results.rows[0].textContent,
            responseTo: results.rows[0].ResponseTo_chatID,
            attachements: null,
            readedBy: [],
        }

    } catch (error) {
        throw error;
    }

}