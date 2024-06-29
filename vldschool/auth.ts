import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Resend from "next-auth/providers/resend"
import type { Provider } from "next-auth/providers"
import PostgresAdapter from "@auth/pg-adapter"
import { DatabaseService } from "./db"

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
  adapter: PostgresAdapter(new DatabaseService().pool),
  providers,
  pages: {
    signIn: "/auth",
    signOut: "/auth/signout",
    error: "/auth/error",
    verifyRequest: "/auth/verify-request",
  },
  callbacks: {
    session({ session, user }) {
      session.user.id = user.id
      return session
    },
  },
})