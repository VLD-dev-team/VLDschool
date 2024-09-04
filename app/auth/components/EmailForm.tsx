"use client";

import { useState } from "react";
import { authSignInWithEmail } from "../authServerActions";

export default async function EmailForm() {
  const [submitted, changeSubmitStatus] = useState(false);

  return (
    <form action={authSignInWithEmail} onSubmit={() => changeSubmitStatus(true)}>
      <p className="mt-7">Adresse email</p>
      <input
        type="email"
        className="w-full rounded mt-3 bg-transparent border-[var(--neutral)] border p-4"
        placeholder="Entrez ici votre adresse email."
        name="email"
        required
        disabled={submitted}
      />
      <button type="submit" className="p-3 bg-[var(--primary)] rounded text-[var(--on-primary)] float-end mt-4 flex items-center gap-2 disabled:bg-[var(--primary-container)]" disabled={submitted}>
        Continuer
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
      </button>
    </form>
  );
}
