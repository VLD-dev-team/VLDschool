"use client";

import { useEffect, useState } from "react";
import { ChatProvider, CHATROOMS_LOADED, ERROR_LOADING_ROOMS, NEW_MESSAGE_IN_CHATROOM, useChat, useChatDispatch } from "../../chats/context/chatContext";
import TabButton from "./tabButton";
import { getSocket } from "@/app/utils/getSocket";
import getChatRooms from "@/functions/chats/getChatRooms";

export default function MessageButtonIndicator() {

    const chat = useChat();
    const dispatch = useChatDispatch();

    useEffect(() => {
        if (chat.rooms.length == 0) {
            getChatRooms().then((loadedRooms) => {
                dispatch({
                    type: CHATROOMS_LOADED,
                    rooms: loadedRooms,
                })
            }).catch((error) => {
                dispatch({
                    type: ERROR_LOADING_ROOMS,
                    error: "Erreur de chargement de la liste de discussion."
                })
            });
        }
    }, [getChatRooms, dispatch]);

    return (
        <ChatProvider>
            <span className="relative">
                {
                    (chat.unreadCount > 0)
                        ? <div className="absolute top-0 right-0 bg-red-500 p-2 w-4 h-4 rounded-full"></div>
                        : null
                }
                <TabButton href={"/dashboard/chats"} iconNameOrPath={"chat"} isGoogleIcon={true} />
            </span>
        </ChatProvider>
    )
}