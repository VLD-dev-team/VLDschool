import { auth } from "@/auth"
import { redirect } from "next/navigation"

export default async function Page() {
  const session = await auth()

  if (!session) {
    redirect("/auth")
  }

  return (
    <div className="">
      <p>Bienvenue {session.user.name}</p>
    </div>
  )
}