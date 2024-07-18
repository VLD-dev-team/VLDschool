"use server"

import { auth, signIn, signOut } from "@/auth"

export async function authSignInWithEmail(formData: FormData) {
    await signIn('resend', formData, { redirectTo: "/dashboard" })
    return '';
}

export async function authSignInWithGoogle() {
    await signIn('google', { redirectTo: "/dashboard" })
    return '';
}

export async function authSignOut() {
    await signOut({ redirectTo: "/auth" })
    return '';
}

export async function authGetSession() {
    const session = await auth()
    return session;
}
