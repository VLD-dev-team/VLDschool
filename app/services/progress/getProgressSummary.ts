"use server";

import { Course } from "@/app/types/course";
import { auth } from "@/auth";
import executeQuery from "@/db";

export const getProgressSummary = async (): Promise<{ totalXP: number, days: { progressDate: string, dailyProgressScore: number }[] } | null> => {

    // On vérifie si l'utilisateur est connecté et qu'il est un élève
    const session = await auth();
    if (!session || (session.user.role != "student")) {
        return null
    }

    const userID = session.user.id ?? "";

    // On fait la requette à la base de données
    const query = `
        WITH DateRange AS (
            SELECT generate_series(
                NOW() - INTERVAL '6 days',
                NOW(),
                INTERVAL '1 day'
            ) AS Date
        )

        SELECT
            TO_CHAR(d.Date, 'DD/MM/YYYY') AS "progressDate",
            COALESCE(SUM(p."progressScore"), 0)::int AS "dailyProgressScore"
        FROM
            DateRange d
            LEFT JOIN progress p ON d.Date = DATE(p."progressDate")
                AND p."userID" = $1
        GROUP BY
            d.Date
        ORDER BY
            d.Date
        ;
    `
    const results = await executeQuery(query, [userID]);

    const daysDetails = results.rows;
    let totalXP = 0;
    results.rows.map((day: { progressDate: string, dailyProgressScore: number }) => {
        totalXP += day.dailyProgressScore;
    })

    return { totalXP: totalXP, days: daysDetails };

}