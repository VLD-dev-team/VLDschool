import NextAuth, { type DefaultSession } from "next-auth"
import Google from "next-auth/providers/google"
import Resend from "next-auth/providers/resend"
import type { Provider } from "next-auth/providers"
import PostgresAdapter from "@auth/pg-adapter"
import { pgpool } from "./db"
import { authEvents } from "./authEvents"
 
declare module "next-auth" {
  interface User {
    id?: string
    name?: string | null
    email?: string | null
    image?: string | null
    role?: string | "student" | null
    
  }

  interface Session {
    user: {
      role: string
    } & DefaultSession["user"]
  }
}

const providers: Provider[] = [
  Google,
  Resend(
    {
      from: "auth@school.vld-group.com",
    }
  )
]

export const providerMap = providers.map((provider) => {
  if (typeof provider === "function") {
    const providerData = provider()
    return { id: providerData.id, name: providerData.name }
  } else {
    return { id: provider.id, name: provider.name }
  }
})

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PostgresAdapter(pgpool),
  providers,
  pages: {
    signIn: "/auth",
    signOut: "/auth/signout",
    error: "/auth/error",
    verifyRequest: "/auth/verify-request",
  },
  callbacks: {
    session({ session, token, user }) {
      return {
        ...session,
        user: {
          ...session.user,
          role: user.role,
        },
      }
    },
  },
  events: authEvents,
})