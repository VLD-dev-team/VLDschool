import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { SignInForm } from "../components/signInForm";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "VLDschool - Connexion à votre compte VLDschool",
  description: "Connexion à la plateforme.",
};

export default async function SignInScreen() {
  const session = await auth()
  if (session) {
    redirect("/home")
  }

  return (
    <div className="flex justify-center items-center w-full">
      <div className="w-full flex flex-col gap-5 md:w-4/5">
        <p className="hidden md:block text-xl">Connexion à votre compte</p>
        <SignInForm></SignInForm>
        <Link href={'/auth/signup'}>

        </Link>
      </div>
    </div>
  )
}
