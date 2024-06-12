'use client'

import { redirect, usePathname } from "next/navigation";
import { ReactNode, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function AuthScreenLayout({
    children,
}: {
    children: ReactNode
}) {
    // On renvoi l'écran
    return (
        <div className="p-8 flex flex-col md:flex-row gap-5 md:gap-0 h-full bg-[var(--primary-container)] text-[var(--on-primary-container)] overflow-scroll justify-between">
            <div className="md:flex md:flex-col md:justify-center md:h-full md:basis-1/2 md:items-center shrink-0">
                <div className="md:flex md:flex-col md:justify-around md:h-full md:w-4/5">
                    <AuthText></AuthText>
                    <div className="hidden md:block">
                        <Links></Links>
                    </div>
                </div>
            </div>
            {children}
            <div className="md:hidden">
                <Links></Links>
            </div>

        </div>
    )
}

function AuthText() {
    let title: string = "Connexion à VLDschool";
    let subtitle: string = "Veuillez choisir un parcours d'authentification"
    let pathname = usePathname()
    if (pathname.endsWith("/auth/signin")) {
        title = "Ravi de vous revoir !";
        subtitle = "Connexion à votre compte VLDschool";
    }
    if (pathname.endsWith("/auth/signup")) {
        title = "Bienvenue parmis nous !";
        subtitle = "Création de votre compte élève";
    }

    return (
        <div>
            <Image
                src={"/logos/vldminiwhite.png"}
                alt="VLDschool"
                width={200}
                height={200}
            />
            <p className="mt-5 text-2xl font-semibold">{title}</p>
            <p>{subtitle}</p>
        </div>
    )
}

function Links() {
    return (
        <div>
            <p className="md:text-xl font-semibold mb-2 md:mb-4">Liens rapides</p>
            <div className="flex items-center gap-2 mb-2 md:mb-4">
                <img className="size-5" src="/icons/home.svg" alt=">" />
                <Link href={'/'} className="underline">Accueil du site</Link>
            </div>
            <div className="flex items-center gap-2 mb-2 md:mb-4">
                <img className="size-5" src="/icons/book.svg" alt=">" />
                <Link href={'/terms-and-conditions'} className="underline">Conditions d'utilisation</Link>
            </div>
            <div className="flex items-center gap-2">
                <img className="size-5" src="/icons/policy.svg" alt=">" />
                <Link href={'/privacy'} className="underline">Déclaration de confidentialité</Link>
            </div>
        </div>
    )
}