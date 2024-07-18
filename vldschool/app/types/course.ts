export interface Course {
    courseID: string;
    name: string;
    desc: string;
    teacherID: number;
    iconURL: string;
    stripeItemID: string;
    isFavorite: boolean | undefined;
}

export interface CourseRegistration extends Course {
    courseRegID: number,
}