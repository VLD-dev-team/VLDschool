import TabButton from "./tabButton";
import { Course } from "@/types/course";
import { getStudentCourses } from "@/functions/courses/getStudentCourses";
import MessageButtonIndicator from "./messageIndicator";

export default async function NavBar() {
    // On importe les cours
    const courses = await getStudentCourses() ?? [];

    return (
        <div className="w-full h-full bg-[var(--primary-container)] rounded-t-xl md:rounded-none flex md:flex-col md:gap-5 md:overflow-y-scroll items-center justify-evenly md:justify-start">
            <img src="/logos/vldminiwhite.png" alt="VLDschool" width="80%" height={30} className="hidden md:block mt-4 p-1" />
            <TabButton href={"/dashboard"} iconNameOrPath={"home"} isGoogleIcon={true} />
            <TabButton href={"/dashboard/profile"} iconNameOrPath={"person"} isGoogleIcon={true} />
            <MessageButtonIndicator></MessageButtonIndicator>
            <div className="shrink-0 hidden md:block h-[2px] bg-[var(--primary)] w-1/6 mx-1"></div>
            <TabButton href={"/dashboard/courses"} iconNameOrPath={"view_list"} isGoogleIcon={true} />
            <span className="flex-col gap-5 hidden md:flex">
                {
                    courses.filter((course: Course) => course.isFavorite !== false).map((course: Course) => (
                        <TabButton href={`/dashboard/courses/${course.courseID}`} iconNameOrPath={`${course.iconURL}`} isGoogleIcon={false} key={`key-${course.courseID}`} />
                    ))
                }
            </span>
            <div className="shrink-0 hidden md:block h-[2px] bg-[var(--primary)] w-1/6 mx-1"></div>
            <TabButton href={"/shop"} iconNameOrPath={"shop"} isGoogleIcon={true} />
        </div>
    )
}