import ChatList from "@/app/dashboard/chats/components/chatList"
import getChatRooms from "@/functions/chats/getChatRooms"
import { ChatRoom } from "@/types/chat"

export default async function DashBoardMessages() {

    const chatRooms: ChatRoom[] | null = await getChatRooms()

    return (
        <div>
            <p className="uppercase text-sm pb-4">CORRESPONDANCES AVEC VOS PROFESSEURS</p>
            <div className="flex flex-wrap md:flex gap-3 bg-[var(--surface)] rounded p-4 md:p-8 shadow">
                <ChatList></ChatList>
            </div>
        </div>
    )
}