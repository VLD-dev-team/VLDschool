"use client"

import { getStudentCourses } from "@/app/services/courses";
import TabButton from "./tabButton";
import { useEffect } from "react";
import { useStudentCourses } from "@/app/context/studentCourses";

export default async function NavBar() {

    useEffect(() => {
        getStudentCourses()
            .then(courses => { 
                
            })
            .catch(error => { })
            .finally(() => { })
    })

    // On importe les cours
    const courses = useStudentCourses();

    return (
        <div className="w-full h-full bg-[var(--primary-container)] flex flex-col gap-5 overflow-y-scroll items-center">
            <img src="/logos/vldminiwhite.png" alt="VLDschool" width="80%" height={30} className="invert dark:invert-0 mt-4 p-1" />
            <TabButton selected={true} href={"/dashboard"} iconNameOrPath={"home"} isGoogleIcon={true} />
            <TabButton selected={false} href={"/dashboard/profile"} iconNameOrPath={"person"} isGoogleIcon={true} />
            <div className="h-[2px] bg-[var(--primary)] w-1/6 mx-1"></div>
            <TabButton selected={false} href={"/dashboard/courses"} iconNameOrPath={"view_list"} isGoogleIcon={true} />
            {
                courses.favoriteCourses.map(course => (
                    <TabButton selected={false} href={`/dashboard/courses/${course.courseID}`} iconNameOrPath={`${course.iconURL}`} isGoogleIcon={false} key={`key-${course.courseID}`} />
                ))
            }
        </div>
    )
}