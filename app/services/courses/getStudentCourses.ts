"use server"

import { auth } from "@/auth";
import { Course } from "../../types/course";
import { DatabaseService } from "@/db";

// Importation de la base de données
const db = new DatabaseService();

export const getStudentCourses = async (): Promise<Course[] | null> => {

    // On vérifie si l'utilisateur est connecté et qu'il est un élève
    const session = await auth();
    if (!session || (session.user.role != "student")) {
        return null
    }

    const userID = session.user.id ?? "";

    // On fait la requete à la base de données
    const results = await db.executeQuery(`SELECT * FROM courseregistrations JOIN "courses" ON courseregistrations."courseID" = courses."courseID" WHERE "studentID" = $1 ;`, [userID.toString()]);

    // Parsing des résultats dans une liste
    let courses: Array<Course> = [];
    results.rows.forEach((value) => {
        let course: Course = {
            courseID: value.courseID,
            name: value.courseName,
            desc: value.courseDesc,
            teacherID: value.courseTeacherID,
            iconURL: value.courseIcon,
            stripeItemID: value.StripeItemID,
            isFavorite: value.isFavorite,
        }
        courses.push(course);
    });

    // Renvoi de la liste de cours
    return courses;

};