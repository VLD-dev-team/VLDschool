import { Metadata } from "next";
import NavBar from "./components/navBar/navBar";

export const metadata: Metadata = {
  title: "VLDschool",
  description: "Trouvez la formation qu'il vous faut avec VLDschool.",
};

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col-reverse md:flex-row flex-nowrap w-full h-full overflow-hidden">
      <div className="shrink-0 md:w-[100px] ">
        <NavBar></NavBar>
      </div>
      <div className="grow p-8 md:p-12">{children}</div>
    </div>
  );
}