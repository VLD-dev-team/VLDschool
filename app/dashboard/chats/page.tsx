import ChatList from "./components/chatList";
import getChatRooms from "@/functions/chats/getChatRooms";

export default async function ChatPage() {

    const chatRooms = await getChatRooms();

    return (
        <div>
            <ChatList></ChatList>
        </div>
    )
}