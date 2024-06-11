import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth"
import { saltAndHash } from "./utils/hashFunctions";
import { getAccountByEmail } from "./database/getAccount";

// Notice this is only an object, not a full Auth.js instance
export default {
    providers: [
        Google,
        Credentials({
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            credentials: {
                username: { label: 'Pseudo', type: "text" },
                email: { label: 'Email', type: 'email' },
                password: { label: 'Mot de passe', type: 'password' },
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
} satisfies NextAuthConfig