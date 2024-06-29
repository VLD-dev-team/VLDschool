import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import GoogleAuthButton from "./components/googleAuthButton";

export const metadata: Metadata = {
    title: "VLDschool",
    description: "Trouvez la formation qu'il vous faut avec VLDschool.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-full bg-[var(--primary-container)] overflow-scroll flex items-center justify-center">
            <div className="p-8 flex gap-2 md:bg-[var(--surface)] md:w-[60%] md:h-[60%] rounded items-center">
                <div className="flex flex-col gap-4 md:basis-1/2 h-full justify-between">
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
                        <p className="text-2xl">Entrez votre adresse mail ou connectez-vous via Google pour continuer</p>
                    </div>
                    <div className="hidden md:block">
                        <Links />
                    </div>
                </div>
                <div className="hidden md:block w-[1px] bg-[var(--neutral)] h-[80%] mx-8 shrink-0"></div>
                {children}
                <div className="md:hidden">
                    <Links />
                </div>
            </div>
        </div>
    );
}

function Links() {
    return (
        <div>
            <div className="flex items-center gap-2 mb-2 md:mb-4">
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