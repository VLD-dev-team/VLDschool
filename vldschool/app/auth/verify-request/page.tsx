import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function SignOutPage() {
    const session = await auth();
    if (session) {
        redirect("/home");
    }

    return (
        <div className="w-full basis-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10">
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>

            <h5 className="font-bold text-xl my-4">Vérifiez votre boite email</h5>
            <p>Un email de connexion vous a été envoyé sur votre adresse email. N'oubliez pas de vérifier vos spam.</p>
        </div>
    )
}