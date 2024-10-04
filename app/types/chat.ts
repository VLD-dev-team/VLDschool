import { User } from "next-auth";

export interface Chat {
    chatID: number;
    chatRoomID: number;
    sendDate: string;
    author: User | string;
    textContent: string;
    responseTo: null | Chat | string;
    attachements: Attachement[] | null;
    readedBy: User[];
}

enum Attachement_type { "image", "video" }

export interface Attachement {
    attachementID: number;
    author: User | string;
    type: Attachement_type;
    path: string;
}

export interface ChatRoom {
    roomID: number;
    name: string;
    iconPath: string;
    unreadCount: number;
    lastChat: Chat;
    members: User[];
}