"use client";

import React, { Dispatch, createContext, useContext, useReducer } from "react";
import { ChatRoom } from "@/types/chat";

interface ChatStateTypes {
  rooms: ChatRoom[],
  unreadCount: number,
  error: string,
  loading: boolean,
}

const initialChatState: ChatStateTypes = {
  rooms: new Array<ChatRoom>,
  unreadCount: 0,
  error: "",
  loading: false,
}

const ChatContext = createContext<ChatStateTypes>(initialChatState);
const ChatDispatchContext = createContext<Dispatch<any>>(() => { });

export const CHATROOMS_LOADED = "CHATROOMS_LOADED";
export const ERROR_LOADING_ROOMS = "ERROR_LOADING_ROOMS";
export const NEW_CHATROOM = "NEW_CHATROOM";
export const CHATROOM_DELETED = "CHATROOM_DELETED";
export const NEW_MESSAGE_IN_CHATROOM = "NEW_MESSAGE_IN_CHATROOM";
export const CHATROOM_READ = "CHATROOM_READ"

function StudentCourseReducer(ChatState: ChatStateTypes, actionPayload: any): ChatStateTypes {
  switch (actionPayload.type) {
    case CHATROOMS_LOADED:
      return {
        rooms: actionPayload.rooms,
        error: "",
        loading: false,
        unreadCount: actionPayload.unreadCount,
      }
    case ERROR_LOADING_ROOMS:
      return {
        ...ChatState,
        error: actionPayload.error,
      }
    case NEW_CHATROOM:
      return {
        ...ChatState,
      }
    case CHATROOM_DELETED:
      return {
        ...ChatState,
      }
    case NEW_MESSAGE_IN_CHATROOM:
      return {
        ...ChatState,
      }
    case CHATROOM_READ:
      return {
        ...ChatState,
      }
    default:
      return ChatState;
  }
}

export function ChatProvider({ children }: {
  children: React.ReactElement
}) {
  const [Chat, dispatch] = useReducer(StudentCourseReducer, initialChatState);

  return (
    <ChatContext.Provider value={Chat}>
      <ChatDispatchContext.Provider value={dispatch}>
        {children}
      </ChatDispatchContext.Provider>
    </ChatContext.Provider>
  );
}

export function useChat() {
  return useContext(ChatContext);
}

export function useChatDispatch() {
  return useContext(ChatDispatchContext);
}

