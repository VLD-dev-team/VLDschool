"use client"

import Link from "next/link";
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
        <Link href={href} className={"p-[20px] basis-1/4 md:basis-auto rounded-t-xl md:rounded-full cursor-pointer md:border-[2px] border-[var(--primary)] md:aspect-square flex items-center justify-center hover:bg-[var(--primary-hover)] " + selectedProperties}>
            {
                (isGoogleIcon)
                    ? <span className="material-symbols-rounded text-[24px] text-[--on-primary]">{iconNameOrPath}</span>
                    : <img src={iconNameOrPath} className="w-[24px] h-[24px] text-[--on-primary]" />
            }
        </Link>
    )
}