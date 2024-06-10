import PostgresAdapter from "@auth/pg-adapter";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { pool } from "./app/lib/db";
import { saltAndHash } from "./app/utils/hashFunctions";
import { getAccountByEmail } from "./app/utils/dbActions/getAccount";

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PostgresAdapter(pool),
    providers: [
        Google,
        Credentials({
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            credentials: {
                username: {label: 'Pseudo', type:"text"},
                email: {label: 'Email', type: 'email'},
                password: {label: 'Mot de passe', type: 'password'},
            },
            authorize: async (credentials) => {
                let user = null;

                // logic to salt and hash password
                const pwHash = await saltAndHash(`${credentials.password}`);

                // logic to verify if user exists
                user = await getAccountByEmail(`${credentials.email}`);

                if (!user) {
                    // No user found, so this is their first attempt to login
                    // meaning this is also the place you could do registration
                    throw new Error("User not found.")
                }

                const bddPassword = await user.getUserHashedPassword();

                if (bddPassword != pwHash) {
                    throw new Error("Password Inccorect");
                }

                // return user object with the their profile data
                return user.getUserInfos();
            },
        }),
    ],
})