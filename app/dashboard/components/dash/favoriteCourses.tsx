import { getStudentCourses } from "@/app/services/courses/getStudentCourses"
import { Course } from "@/app/types/course";

export default async function FavoriteCourses() {

    const favoriteCourses: Course[] | null = await getStudentCourses("favorite");

    return (
        <div>
            <p className="uppercase text-sm pb-4">Vos cours favoris</p>
            <div className="bg-[var(--surface)] rounded p-4">
                {
                    (favoriteCourses == null || favoriteCourses.length == 0)
                        ? <div className="py-4 grid place-items-center md:flex md:px-4 gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                                <path fillRule="evenodd" d="m5.965 4.904 9.131 9.131a6.5 6.5 0 0 0-9.131-9.131Zm8.07 10.192L4.904 5.965a6.5 6.5 0 0 0 9.131 9.131ZM4.343 4.343a8 8 0 1 1 11.314 11.314A8 8 0 0 1 4.343 4.343Z" clipRule="evenodd" />
                            </svg>
                            <p>Pas de cours mis en favoris</p>
                        </div>
                        : <div>

                        </div>
                }
            </div>
        </div>
    )
}

async function courseCard(course: Course) {
    
}