import { getStudentCourses } from "@/app/services/courses/getStudentCourses"
import { Course } from "@/app/types/course";
import Link from "next/link";

export default async function FavoriteCourses() {

    const favoriteCourses: Course[] | null = await getStudentCourses("favorite");

    return (
        <div>
            <p className="uppercase text-sm pb-4">Vos cours favoris</p>
            <div className="bg-[var(--surface)] rounded p-4 md:p-6 overflow-x-scroll shadow">
                {
                    (favoriteCourses == null || favoriteCourses.length == 0)
                        ? <div className="py-4 grid place-items-center md:flex md:px-4 gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                                <path fillRule="evenodd" d="m5.965 4.904 9.131 9.131a6.5 6.5 0 0 0-9.131-9.131Zm8.07 10.192L4.904 5.965a6.5 6.5 0 0 0 9.131 9.131ZM4.343 4.343a8 8 0 1 1 11.314 11.314A8 8 0 0 1 4.343 4.343Z" clipRule="evenodd" />
                            </svg>
                            <p>Pas de cours mis en favoris</p>
                        </div>
                        : (
                            <div className="inline-block w-max">
                                {
                                    favoriteCourses.map(course => {
                                        return (
                                            <DashCourseCard course={course} />
                                        )
                                    })
                                }
                            </div>
                        )
                }
            </div>
        </div>
    )
}

async function DashCourseCard({ course }: { course: Course }) {
    return (
        <Link className="inline-flex items-center bg-[var(--primary)] text-[var(--on-primary)] px-5 py-3 md:py-5 rounded-xl gap-4 mr-5 md:min-w-[400px]" href={`/course/${course.courseID}`}>
            <div className="shrink-0">
                <div className="md:border-2 rounded-full md:p-5">
                    <img src={course.iconURL} alt="" className="size-8 md:size-10" />
                </div>
            </div>
            <div>
                <p className="font-semibold md:text-xl">{course.name}</p>
                <p className="truncate text-sm md:text-base line-clamp-1 md:line-clamp-2">{course.desc}</p>
                <span className="hidden md:flex items-center mt-2">
                    <p className="uppercase text-sm">Page du cours</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                        <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                </span>
            </div>
        </Link>
    )
}