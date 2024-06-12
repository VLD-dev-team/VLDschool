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
        <div className="w-full h-full flex bg-[var(--primary-container)] text-[var(--on-primary-container)]">
            <div className="basis-1/2 flex justify-center items-center">
                <div className="flex flex-col h-full justify-around">
                    <AuthText />
                    <div>
                        <p className="text-xl font-semibold mb-4">Liens rapides</p>
                        <div className="flex items-center gap-2 mb-4">
                            <img className="size-5" src="/icons/home.svg" alt=">" />
                            <Link href={'/'} className="underline">Accueil du site</Link>
                        </div>
                        <div className="flex items-center gap-2 mb-4">
                            <img className="size-5" src="/icons/book.svg" alt=">" />
                            <Link href={'/terms-and-conditions'} className="underline">Conditions d'utilisation</Link>
                        </div>
                        <div className="flex items-center gap-2">
                            <img className="size-5" src="/icons/policy.svg" alt=">" />
                            <Link href={'/privacy'} className="underline">Déclaration de confidentialité</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="basis-1/2">
                {children}
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