import { getProgressSummary } from "@/app/services/progress/getProgressSummary";

export default async function progressSummary() {

    const progressData = await getProgressSummary();
    console.log(progressData);
    

    return (
        <div className="">
            <p className="uppercase text-sm pb-4">RÉSUMÉ DE VOTRE PROGRESSION</p>
            <div className="flex flex-wrap md:flex gap-3">
                
            </div>
        </div>
    )
}