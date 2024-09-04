import LandingPageProfile from "../components/landingPageProfileSelector";

export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-full overflow-y-scroll flex flex-col items-center">
      <header className="fixed z-10 w-full min-h-[100px] flex flex-col items-center bg-[var(--primary-container)] text-[var(--on-primary-container)]">
        <div className="w-[90%] xl:w-[70%] h-[100px] flex items-center justify-between">
          <a href="/" className="flex items-center gap-1">
            <p className="text-xl font-semibold">Boutique</p>
            <img src="/logos/vldminiwhite.png" alt="VLDschool" className="h-8" />
            <p className="text-xl font-semibold">School</p>
          </a>
          <LandingPageProfile></LandingPageProfile>
        </div>
      </header>
      <div className="pt-[100px] w-[90%] xl:w-[70%] h-full">
        {children}
      </div>
    </div>
  );
}