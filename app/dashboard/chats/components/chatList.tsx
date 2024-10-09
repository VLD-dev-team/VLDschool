"use client";

import { useChat } from "../context/chatContext";

export default function ChatList() {

    const rooms = useChat();

    return (
        <div>
            {
                rooms.rooms.map((room) => {
                    return <p>{room.name}</p>
                })
            }
        </div>
    )
}   