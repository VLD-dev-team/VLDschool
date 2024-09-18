"use server"

import { auth, signIn, signOut } from "@/auth"

export async function authSignInWithEmail(formData: FormData, redirectURI: string) {
    await signIn('resend', formData, { redirectTo: redirectURI })
    return '';
}

export async function authSignInWithGoogle(redirectURI: string) {
    await signIn('google', {redirectTo: redirectURI})
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
