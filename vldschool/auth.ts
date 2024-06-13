import NextAuth from "next-auth"
import authConfig from "./auth.config"
import PostgresAdapter from "@auth/pg-adapter"
import { DatabaseService } from "./db"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PostgresAdapter(new DatabaseService().pool),
  session: { strategy: "jwt" },
  ...authConfig,
})