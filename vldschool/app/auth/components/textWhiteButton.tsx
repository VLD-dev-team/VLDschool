import React from "react"
import Image from "next/image"

export default function TextWhiteButton({
    children
}: {
    children: React.ReactElement
}) {
    return (
        <div className="w-full bg-white text-black px-4 py-2 rounded hover:bg-[var(--primary)] hover:text-[var(--on-primary)] flex justify-between items-center">
            {children}
            <svg className="size-4 fill-current" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
        </div>
    )
}