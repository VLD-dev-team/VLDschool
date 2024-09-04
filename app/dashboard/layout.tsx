import { Metadata } from "next";
import NavBar from "./components/navBar/navBar";
import { StudentCoursesProvider } from "./context/studentCourses";

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
    <div className="flex flex-nowrap w-full h-full overflow-hidden">
      <div className="shrink-0 w-[100px] ">
        <NavBar></NavBar>
      </div>
      <div className="grow">{children}</div>
    </div>
  );
}