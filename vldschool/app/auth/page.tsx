import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import TextWhiteButton from "./components/textWhiteButton";

export const metadata: Metadata = {
    title: "VLDschool - Authentification",
    description: "Créez votre compte élève ou connectez-vous.",
};

export default function AuthScreen() {
    return (
        <div className="flex justify-center items-center w-full">
            <div className="w-full flex flex-col gap-5 md:w-4/5">
                <Link href={'/auth/signin'}>
                    <TextWhiteButton>
                        <p>Connexion à un compte existant</p>
                    </TextWhiteButton>
                </Link>
                <Link href={'/auth/signup'}>
                    <TextWhiteButton>
                        <p>Créer un compte élève</p>
                    </TextWhiteButton>
                </Link>
            </div>
        </div>
    ) 
}
