import { auth } from "@/auth";
import Link from "next/link";

export default function ShopLayout({
  children, modal
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <div className="w-full h-full overflow-y-scroll flex flex-col items-center">
      <header className="fixed z-10 w-full min-h-[100px] flex flex-col items-center bg-[var(--primary-container)] text-[var(--on-primary-container)]">
        <div className="w-[90%] xl:w-[70%] h-[100px] flex items-center justify-between">
          <a href="/" className="flex items-center gap-1">
            <p className="md:text-xl font-semibold">Boutique</p>
            <img src="/logos/vldminiwhite.png" alt="VLDschool" className="h-5 md:h-8" />
            <p className="hidden md:block text-xl font-semibold">School</p>
          </a>
          <LandingPageProfileShop></LandingPageProfileShop>
        </div>
      </header>
      <div className="pt-[100px] w-[90%] xl:w-[70%] h-full">
        {children}
        {modal}
        <div id="modal-root" /> 
      </div>
    </div>
  );
}

async function LandingPageProfileShop() {
    const session = await auth();

    if (session) {
        return (
            <a href="/dashboard" className="hover:underline">
                <div className="text-right">
                    <p className="truncate"><span className="hidden md:inline">Connecté au compte de</span> {session.user.name ?? session.user.email ?? session.user.id}</p>
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
                <Link href="/auth" className="hover:underline" passHref>S'inscrire</Link>
                <Link href="/auth" className="hover:underline" passHref>Se connecter</Link>
            </div>
        )
    }
}