"use client";

import { ChatRoom } from "@/app/types/chat";
import { getSocket } from "@/app/utils/getSocket";
import { useState } from "react";

export default function ChatList({ chatRooms }: { chatRooms: ChatRoom[] }) {

    const [rooms, updateRooms] = useState(chatRooms);

    const socket = getSocket();
    updateRooms([...rooms, {
        roomID: 0,
        name: "",
        iconPath: "",
        unreadCount: 0,
        lastChat: undefined,
        members: []
    }])

    return (
        <div>
            {
                rooms?.map((room) => {
                    return <p>{room.name}</p>
                })
            }
        </div>
    )
}   