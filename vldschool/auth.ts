import NextAuth from "next-auth"
import authConfig from "./auth.config"
import PostgresAdapter from "@auth/pg-adapter"
import { DatabaseService } from "./db"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PostgresAdapter(new DatabaseService().pool),
  callbacks: {
    session({ session, user }) {
      session.user.id = user.id
      return session
    },
  },  
  ...authConfig,
})