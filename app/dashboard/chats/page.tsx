import ChatList from "./components/chatList";
import getChatRooms from "@/app/services/chats/getChatRooms";

export default async function ChatPage() {

    const chatRooms = await getChatRooms();

    return (
        <div>
            <ChatList chatRooms={chatRooms}></ChatList>
        </div>
    )
}