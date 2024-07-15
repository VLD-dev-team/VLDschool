"use client";

import React, { createContext } from "react";
import { Course } from "@/app/types/course"

export const StudentCoursesState = createContext({
  courses: new Array<Course>,
  favoriteCourses: new Array<Course>,
  error: "",
  loading: false,
});