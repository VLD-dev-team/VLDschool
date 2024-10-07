"use server";

import { ChatRoom } from "@/app/types/chat";
import executeQuery from "@/db";
import { User } from "next-auth";

/// NE PAS UTILISER SANS AVOIR CHECKÉ LES AUTORISATIONS
export default async function createChatRoom({ members, name, iconPath }: { members: User[]; name: string; iconPath: string; }): Promise<ChatRoom | null> {

    try {
        
        const createRoomQuery = `
            INSERT INTO chatrooms (name, "iconPath") 
            VALUES ($1, $2)
            RETURNING "roomID"
        ;`;
        var result = await executeQuery(createRoomQuery, [name, iconPath]);

        const roomID = result.rows[0].roomID;

        let connectionData = ""
        members.forEach(async (member) => {  
            const createConnectionsQuery = `
                INSERT INTO chatroommembers ("roomID", "userID")
                VALUES ( $1, $2 )
            ;`;
            result = await executeQuery(createConnectionsQuery, [roomID, member.id ?? 0])
            console.log(result);
        });

        return {
            roomID: roomID, 
            name: name,
            iconPath: iconPath,
            unreadCount: 0,
            lastChat: null,
            members: members
        };

    } catch (error) {
        throw error;
    }
}