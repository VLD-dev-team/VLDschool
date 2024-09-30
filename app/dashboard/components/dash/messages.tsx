import { getProgressSummary } from "@/app/services/progress/getProgressSummary";

export default async function DashBoardMessages() {

    return (
        <div>
            <p className="uppercase text-sm pb-4">CORRESPONDANCES AVEC VOS PROFESSEURS</p>
            <div className="flex flex-wrap md:flex gap-3 bg-[var(--surface)] rounded p-4 md:p-8 ">
                <MessageList></MessageList>
            </div>
        </div>
    )
}

function MessageList() {
    return (
        <div>Messages</div>
    )
}