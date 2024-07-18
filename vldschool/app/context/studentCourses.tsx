"use client";

import React, { Dispatch, createContext, useContext, useReducer } from "react";
import { Course } from "@/app/types/course"

interface StudentCoursesStateTypes {
  courses: Course[],
  favoriteCourses: Course[],
  error: string,
  loading: boolean,
}

const initialStudentCoursesState: StudentCoursesStateTypes = {
  courses: new Array<Course>,
  favoriteCourses: new Array<Course>,
  error: "",
  loading: false,
}

export const StudentCoursesContext = createContext<StudentCoursesStateTypes>(initialStudentCoursesState);
export const StudentCoursesDispatchContext = createContext<Dispatch<any> | null>(null);

const STUDENT_COURSES_LOADED = "STUDENT_COURSES_LOADED";
const COURSE_ADDED_TO_FAVORITE = "COURSE_ADDED_TO_FAVORITE";
const COURSE_REMOVED_FROM_FAVORITE = "COURSE_REMOVE_FROM_FAVORITE";

function StudentCourseReducer(StudentCoursesState: StudentCoursesStateTypes, actionPayload: any): StudentCoursesStateTypes {
  switch (actionPayload.type) {
    case STUDENT_COURSES_LOADED:
      return {
        courses: actionPayload.courses,
        favoriteCourses: actionPayload.courses.filter((course: Course) => course.isFavorite === false),
        error: "",
        loading: false,
      }
    case COURSE_ADDED_TO_FAVORITE:
      return {
        ...StudentCoursesState,
        favoriteCourses: [...StudentCoursesState.favoriteCourses, actionPayload],
      }
    case COURSE_REMOVED_FROM_FAVORITE:
      return {
        ...StudentCoursesState,
        favoriteCourses: StudentCoursesState.favoriteCourses.filter((course: Course) => course.courseID !== actionPayload.courseID),
      }
    default:
      return StudentCoursesState;
  }
}

export function StudentCoursesProvider({ children }: {
  children: React.ReactElement
}) {
  const [StudentCourses, dispatch] = useReducer(StudentCourseReducer, initialStudentCoursesState);

  return (
    <StudentCoursesContext.Provider value={StudentCourses}>
    <StudentCoursesDispatchContext.Provider value={dispatch}>
      { children }
    </StudentCoursesDispatchContext.Provider>
    </StudentCoursesContext.Provider>
  );
}

export function useStudentCourses() {
  return useContext(StudentCoursesContext);
}

export function useStudentCoursesDispatch() {
  return useContext(StudentCoursesDispatchContext);
}