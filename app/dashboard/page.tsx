import { auth } from "@/auth"
import { redirect } from "next/navigation"
import Shortcuts from "./components/dash/shortcuts"
import FavoriteCourses from "./components/dash/favoriteCourses"

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
    </div>
  )
}