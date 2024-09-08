import { auth } from "@/auth"

export default async function AuthCheck({productID}: {productID: string}) {
    const session = await auth();

    if (session) {
        return (
            <div className="bg-[var(--surface-dim)] rounded drop-shadow-lg p-5">
                <div className="flex items-center gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="var(--valid)" className="size-6">
                        <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                    </svg>

                    <div>
                        <p className="text-[var(--neutral-dim)] text-xs truncate uppercase">Connexion à un compte VLDschool</p>
                        <p className="text-[var(--neutral)] truncate"><span className="hidden md:inline">Connecté au compte de</span> {session.user.name ?? session.user.email ?? session.user.id}</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="bg-[var(--surface-dim)] rounded drop-shadow-lg p-5">
            <div className="flex items-center gap-4 mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path fillRule="evenodd" d="M4.5 3.75a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V6.75a3 3 0 0 0-3-3h-15Zm4.125 3a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm-3.873 8.703a4.126 4.126 0 0 1 7.746 0 .75.75 0 0 1-.351.92 7.47 7.47 0 0 1-3.522.877 7.47 7.47 0 0 1-3.522-.877.75.75 0 0 1-.351-.92ZM15 8.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15ZM14.25 12a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15Z" clipRule="evenodd" />
                </svg>
                <div>
                    <p className="text-[var(--neutral-dim)] text-xs truncate uppercase">Connexion à un compte VLDschool</p>
                    <p>Créez un compte ou connectez vous à un compte VLDschool</p>
                </div>
            </div>
            <div>
                <a href={encodeURI(`/auth?redirectTo=/shop/buy/${productID}`)} className="flex items-center justify-between gap-2 rounded bg-[var(--primary)] px-7 py-4 hover:bg-[var(--primary-hover)] transition-colors">
                    <p>Créer mon compte - Connexion</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                </a>
            </div>
        </div>
    )


}