"use client";

import { useState, useContext } from "react";
import { CourseContext } from "../utils/courseContext"
import TabButton from "./tabButton";
import { usePathname } from "next/navigation";

export default function NavBar() {
    // On obtient les cours
    const courses = useContext(CourseContext);

    const [selectedTab, setSelectedTab] = useState("/app")
    let pathname = usePathname()

    return (
        <div className="w-full h-full bg-[var(--primary-container)] flex flex-col gap-5 overflow-y-scroll items-center">
            <img src="/logos/vldminiwhite.png" alt="VLDschool" width="80%" height={30} className="invert dark:invert-0 mt-4 p-1" />
            <TabButton selected={true} href={"/app"} iconNameOrPath={"home"} isGoogleIcon={true}/>
            <TabButton selected={false} href={"/app/profile"} iconNameOrPath={"person"} isGoogleIcon={true}/>
            <div className="h-[2px] bg-[var(--primary)] w-1/6 mx-1"></div>
            <TabButton selected={false} href={"/app"} iconNameOrPath={"view_list"} isGoogleIcon={true}/>
            <TabButton selected={false} href={"/app"} iconNameOrPath={"home"} isGoogleIcon={true}/>
        </div>
    )
}