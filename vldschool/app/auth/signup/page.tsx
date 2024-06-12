import { Metadata } from "next";
import { redirect } from "next/navigation";
import React from "react";

export const metadata: Metadata = {
    title: "VLDschool - Création de compte",
    description: "Créez votre compte élève.",
};

export default function SignUpScreen() {
    return (
        <div>
            Création de compte
        </div>
    ) 
}