export interface Course {
    courseID: number;
    name: string;
    desc: string;
    teacherID: number;
    iconURL: string;
    stripeItemID: string;
    isFavorite: boolean | undefined;
}