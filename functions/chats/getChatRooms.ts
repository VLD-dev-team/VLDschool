"use server";

import { ChatRoom } from "@/app/types/chat";
import { auth } from "@/auth";
import executeQuery from "@/db";

export default async function geChatRooms(): Promise<ChatRoom[]> {

    const session = await auth();
    if (!session) {
        return [];
    }

    const query = `
        SELECT *
        FROM chatrooms cr
        INNER JOIN chatroommembers crm ON cr."roomID" = crm."roomID"
        WHERE crm."userID" = $1 
    ;`;
    const results = await executeQuery(query, [session.user.id ?? 0]);

    let rooms: ChatRoom[] = [];

    results.rows.forEach(room => {
        rooms.push({
            roomID: room.roomID,
            name: room.name,
            iconPath: room.iconPath,
            unreadCount: room.unreadCount ?? 0,
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
            members: []
        })
    })

    return rooms;
}