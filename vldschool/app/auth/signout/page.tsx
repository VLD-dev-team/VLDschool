import { auth, signOut } from "@/auth"
import { redirect } from "next/navigation"

export default async function SignOutPage() {

    // Restrict access only when ths user is connected
    const session = await auth()
    if (!session) {
        redirect("/auth")
    }

    return (
        <div>
            <h5>Se déconnecter ?</h5>
            <form
                action={async (formData) => {
                    "use server"
                    await signOut({ redirectTo: "/auth" })
                }}
            >
                <button type="submit">Sign out</button>
            </form>
        </div>
    )
}