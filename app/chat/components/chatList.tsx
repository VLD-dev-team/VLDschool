"use client";

import { ChatRoom } from "@/app/types/chat";
import { getSocket } from "@/app/utils/getSocket";

export default function ChatList({chatRooms}: {chatRooms: ChatRoom[] | null}) {

    const socket = getSocket();

    return (
        <div>

        </div>
    )
}