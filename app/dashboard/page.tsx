import { auth } from "@/auth"
import { redirect } from "next/navigation"
import Shortcuts from "./components/dash/shortcuts"
import FavoriteCourses from "./components/dash/favoriteCourses"
import ProgressSummary from "./components/dash/progressSummary"
import DashBoardMessages from "./components/dash/messages"

export default async function Page() {
  const session = await auth()

  if (!session) {
    redirect("/auth")
  }

  return (
    <div>
      <p>Bienvenue {session.user.name}</p>
      <p className="text-xl font-semibold mb-6">Mon Dashboard</p>
      <Shortcuts></Shortcuts>
      <div className="py-4"></div>
      <FavoriteCourses></FavoriteCourses>
      <div className="py-4"></div>
      <div className="md:flex gap-10">
        <div className="flex-1">
          <ProgressSummary></ProgressSummary>
        </div>
        <div className="md:hidden py-4"></div>
        <div className="flex-1">
          <DashBoardMessages />
        </div>
      </div>
    </div>
  )
}