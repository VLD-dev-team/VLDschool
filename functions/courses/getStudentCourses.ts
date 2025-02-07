"use server"

import { auth } from "@/auth";
import { Course } from "../../types/course";
import executeQuery from "@/db";

export const getStudentCourses = async (type?: string): Promise<Course[] | null> => {

    // On vérifie si l'utilisateur est connecté et qu'il est un élève
    const session = await auth();
    if (!session || (session.user.role != "student")) {
        return null
    }

    const userID = session.user.id ?? "";

    // On fait la requete à la base de données
    let query = `SELECT * FROM courseregistrations JOIN "courses" ON courseregistrations."courseID" = courses."courseID" WHERE "studentID" = $1 `
    if (type == "favorite") {
        query += `AND "isFavorite" = true `
    }
    query += ` ;`

    const results = await executeQuery(query, [userID.toString()]);

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