import TabButton from "./tabButton";
import { Course } from "@/app/types/course";
import { STUDENT_COURSES_LOADED, useStudentCourses, useStudentCoursesDispatch } from "../../context/studentCourses";
import { useEffect } from "react";
import { getStudentCourses } from "@/app/services/courses";

export default async function NavBar() {
    // On importe les cours
    const courses = await getStudentCourses() ?? [];

    return (
        <div className="w-full h-full bg-[var(--primary-container)] flex flex-col gap-5 overflow-y-scroll items-center">
            <img src="/logos/vldminiwhite.png" alt="VLDschool" width="80%" height={30} className="invert dark:invert-0 mt-4 p-1" />
            <TabButton href={"/dashboard"} iconNameOrPath={"home"} isGoogleIcon={true} />
            <TabButton href={"/dashboard/profile"} iconNameOrPath={"person"} isGoogleIcon={true} />
            <div className="h-[2px] bg-[var(--primary)] w-1/6 mx-1"></div>
            <TabButton href={"/dashboard/courses"} iconNameOrPath={"view_list"} isGoogleIcon={true} />
            {
                courses.filter((course: Course) => course.isFavorite !== false).map((course: Course) => (
                    <TabButton href={`/dashboard/courses/${course.courseID}`} iconNameOrPath={`${course.iconURL}`} isGoogleIcon={false} key={`key-${course.courseID}`} />
                ))
            }
        </div>
    )
}