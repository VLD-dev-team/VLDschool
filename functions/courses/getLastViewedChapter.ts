"use server";

import { auth } from "@/auth";
import { Course } from "../../app/types/course";
import executeQuery from "@/db";


export const getLastViewedChapterURL = async (): Promise<string | null> => {

    // On vérifie si l'utilisateur est connecté et qu'il est un élève
    const session = await auth();
    if (!session || (session.user.role != "student")) {
        return null;
    }

    // On obtient l'URL depuis la base de données
    const userID = session.user.id ?? "";
    const results = await executeQuery("SELECT 'lastViewedChapterURL' FROM users WHERE id = $1 ;", [userID]);

    // On vérifie que le résultat existe et n'est pas nul
    if (results.rowCount == 0 || !results.rows[0].lastViewedChapterURL) {
        return null;
    }

    // On retourne l'url
    return `${!results.rows[0].lastViewedChapterURL}`;

}