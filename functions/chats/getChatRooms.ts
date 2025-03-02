"use server";

import { ChatRoom } from "@/types/chat";
import { auth } from "@/auth";
import executeQuery from "@/db";

export default async function getChatRooms(): Promise<{unreadCount: number, rooms: ChatRoom[]}> {

    const session = await auth();
    if (!session) {
        return {unreadCount: 0, rooms: []};
    }

    console.log('Obtention de la liste de discussion.');

    const query = `
        SELECT 
            cr."roomID",
            cr.name,
            COUNT(c."chatID") AS "unreadCount"
        FROM 
            chatrooms cr
        INNER JOIN 
            chatroommembers crm ON cr."roomID" = crm."roomID"
        LEFT JOIN 
            chats c ON cr."roomID" = c."chatRoomID"
        LEFT JOIN 
            chatreadedby crb ON c."chatID" = crb."chatID" AND crb."userID" = $1
        WHERE 
            crm."userID" = $1 
            AND crb."chatID" IS NULL
        GROUP BY 
            cr."roomID", cr.name
        ORDER BY 
            "unreadCount" DESC;
    ;`;
    const results = await executeQuery(query, [session.user.id ?? 0]);    

    let rooms: ChatRoom[] = [];

    results.rows.forEach(room => {
        rooms.push({
            roomID: room.roomID,
            name: room.name,
            iconPath: room.iconPath,
            unreadCount: parseInt(room.unreadCount ?? '0'),
            lastChat: null /* {
                chatID: room.lastChat.chatID,
                chatRoomID: room.lastChat.chatRoomID,
                sendDate: room.lastChat.sendDat,
                author: room.lastChat.author,
                textContent: room.lastChat.textContent,
                responseTo: null,
                attachements: null,
                readedBy: []
            } */,
            members: undefined
        })
    })

    console.log("Liste obtenue : ", rooms);

    return {unreadCount: 0, rooms: rooms};
}