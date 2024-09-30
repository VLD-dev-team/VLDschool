"use client";

import { registerCharts } from "@/app/services/charts/registerCharts";
import { Bar } from "react-chartjs-2";

registerCharts();

export default function ProgressChart({ progressData }: { progressData: { totalXP: number, days: { progressDate: string; dailyProgressScore: number }[] } | null }) {

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top" as const,
            },
            title: {
                display: true,
                text: "Progression sur les 7 derniers jours.",
            },
        },
    }

    let labels: string[] = [];
    let columnData: number[] = [];
    progressData?.days.forEach(day => {
        labels.push(day.progressDate.toString());
        columnData.push(day.dailyProgressScore);
    })

    const data = {
        labels,
        datasets: [
            {
                label: "XP",
                data: columnData,
                backgroundColor: "var(--primary)",
            }
        ]
    }

    return (
        <Bar options={options} data={data} height={"200px"}/>
    )
}