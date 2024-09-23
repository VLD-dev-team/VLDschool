import { getProgressSummary } from "@/app/services/progress/getProgressSummary";
import Chart, { CategoryScale } from "chart.js/auto";
import ProgressChart from "./progressChart";

export default async function progressSummary() {

    const progressData = await getProgressSummary();

    return (
        <div className="">
            <p className="uppercase text-sm pb-4">RÉSUMÉ DE VOTRE PROGRESSION</p>
            <div className="flex flex-wrap md:flex gap-3">
                <ProgressChart progressData={progressData}></ProgressChart>
            </div>
        </div>
    )
}