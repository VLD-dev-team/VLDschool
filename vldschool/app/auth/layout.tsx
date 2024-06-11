'use client'

import { redirect, usePathname } from "next/navigation";
import {ReactNode, useState} from "react";
import Image from "next/image";

export default function AuthScreenLayout({
    children,
}: {
    children: ReactNode
}) {
    // On renvoi l'écran
    return (
        <div className="w-full h-full flex bg-[var(--primary-container)] text-[var(--on-primary-container)]">
            <div className="flex-1">
                <Image
                    src={"/LogoVLD_White.svg"}
                    alt="VLDschool"
                    width={15}
                    height={15}
                />
            </div>
            <div className="flex-1">
                {children}
            </div>
        </div>
    )
}