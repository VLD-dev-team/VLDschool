import { auth } from "@/auth";

export default async function LandingPageProfile() {
    const session = await auth();

    if (session) {
        return (
            <a href="/dashboard" className="hover:underline">
                <div className="text-right">
                    <p>Connecté au compte de {session.user.name ?? session.user.email ?? session.user.id}</p>
                    <p className="text-sm flex items-center justify-end gap-1 underline">Accéder à mon dashboard<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4">
                        <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
                    </svg>
                    </p>
                </div>
            </a>
        )
    } else {
        return (
            <div className="flex gap-4">
                <a href="/auth" className="hover:underline">S'inscrire</a>
                <a href="/auth" className="hover:underline">Se connecter</a>
            </div>
        )
    }
}