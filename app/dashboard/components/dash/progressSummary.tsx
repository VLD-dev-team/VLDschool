import { getProgressSummary } from "@/app/services/progress/getProgressSummary";
import ProgressChart from "./progressChart";

export default async function progressSummary() {

    const progressData = await getProgressSummary();

    return (
        <div>
            <p className="uppercase text-sm pb-4">RÉSUMÉ DE VOTRE PROGRESSION</p>
            <div className="flex flex-wrap md:flex gap-3 bg-[var(--surface)] rounded p-4 md:p-8">
                <ProgressChart progressData={progressData}></ProgressChart>
            </div>
        </div>
    )
}