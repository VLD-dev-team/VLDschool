import ChatList from "./components/chatList";
import getChatRooms from "@/functions/chats/getChatRooms";

export default async function ChatPage() {
    return (
        <div>
            <ChatList></ChatList>
        </div>
    )
}