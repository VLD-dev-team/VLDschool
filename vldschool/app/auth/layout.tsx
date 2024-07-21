"use client"

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    let bigText: string = "Entrez votre adresse mail ou connectez-vous via Google pour continuer"
    const pathname = usePathname()
    if (pathname.endsWith('/signout')) {
        bigText = "Confirmer la déconnexion à votre compte VLDschool"
    }
    if (pathname.endsWith('verify-request')) {
        bigText = "Vérification du compte VLDschool via un lien envoyé sur votre adresse email"
    }

    return (
        <div className="h-full bg-[var(--primary-container)] overflow-scroll sm:flex items-center justify-center">
            <div className="p-8 flex gap-10 sm:bg-[var(--surface)] sm:w-[90%] md:w-[80%] md:h-min lg:w-[70%] xl:w-[60%] 2xl:w-[50%] rounded items-center">
                <div className="flex flex-col gap-4 sm:basis-1/2 h-full justify-between">
                    <div>
                        <div className="flex items-center gap-1 mb-8">
                            <Image
                                src={"/logos/vldminiwhite.png"}
                                alt="VLDschool"
                                width={100}
                                height={30}
                                className="invert dark:invert-0"
                            />
                            <p className="text-2xl">school</p>
                        </div>
                        <p className="text-2xl">{bigText}</p>
                    </div>
                    <div className="hidden sm:block">
                        <Links />
                    </div>
                </div>
                {children}
                <div className="sm:hidden">
                    <Links />
                </div>
            </div>
        </div>
    );
}

function Links() {
    return (
        <div>
            <div className="flex items-center gap-2 mb-2 md:mb-4 mt-40">
                <img className="size-5 invert dark:invert-0" src="/icons/book.svg" alt=">" />
                <Link href={'/terms-and-conditions'} className="underline">Conditions d'utilisation</Link>
            </div>
            <div className="flex items-center gap-2">
                <img className="size-5 invert dark:invert-0" src="/icons/policy.svg" alt=">" />
                <Link href={'/privacy'} className="underline">Déclaration de confidentialité</Link>
            </div>
        </div>
    )
}