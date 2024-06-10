import { redirect } from "next/navigation";
import React from "react";

export default function Home() {
  // Logic to determine if a redirect is needed
  const accessDenied = true
  if (accessDenied) {
    redirect('/login')
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <p>Accueil connecté</p>
    </main>
  );
}
