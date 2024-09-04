import { auth, signOut } from "@/auth"
import { redirect } from "next/navigation";
import { authSignOut } from "../authServerActions";

export default async function SignOutPage() {
    const session = await auth();
    if (!session) {
        redirect("/auth");
    }

    return (
        <div className="w-full basis-1/2">
            <h5>Souhaitez-vous vraiment vous déconnecter ? ?</h5>
            <form
                action={authSignOut}
            >
                <button type="submit" className="border-[1px] border-[var(--neutral)] rounded flex items-center gap-2 p-4 w-full mt-3">Se déconnecter</button>
            </form>
        </div>
    )
}