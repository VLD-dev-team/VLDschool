import NextAuth from "next-auth"
import authConfig from "./auth.config"
import PostgresAdapter from "@auth/pg-adapter"
import { getPool } from "./db"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PostgresAdapter(getPool()),
  session: { strategy: "jwt" },
  ...authConfig,
})