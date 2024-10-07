"use server";

import { ChatRoom } from "@/app/types/chat";
import executeQuery from "@/db";
import { User } from "next-auth";

/// NE PAS UTILISER SANS AVOIR CHECKÉ LES AUTORISATIONS
export default function createChatRoom({members, name, iconPath}: {members: User[], name: string, iconPath: string}): ChatRoom | null {
    
    const createRoomQuery = `
        INSERT (name, iconPath) 
        VALUES ($1 , $2)
    ;`;
    var result = executeQuery(createRoomQuery, [name, iconPath]);

    

    return null;
}