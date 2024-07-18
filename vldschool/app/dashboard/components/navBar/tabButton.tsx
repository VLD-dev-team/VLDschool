"use client"

import Link from "next/link";
import { NextPage } from "next";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function TabButton(
    { href, isGoogleIcon, iconNameOrPath }: {
        href: string,
        isGoogleIcon: boolean,
        iconNameOrPath: string
    }) {

    const pathname = usePathname()
    const selectedProperties = (pathname.endsWith(href)) ? "bg-[var(--primary)]" : "";

    return (
        <Link href={href} className={"p-[20px] rounded-full cursor-pointer border-[2px] border-[var(--primary)] aspect-square flex items-center justify-center hover:bg-[var(--primary-hover)] " + selectedProperties}>
            {
                (isGoogleIcon)
                    ? <span className="material-symbols-rounded text-[24px]">{iconNameOrPath}</span>
                    : <img src={iconNameOrPath} className="w-[24px] h-[24px] text-[--on-primary]" />
            }
        </Link>
    )
}