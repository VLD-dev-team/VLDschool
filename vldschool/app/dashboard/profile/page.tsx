import { auth } from "@/auth"
import { redirect } from "next/navigation"
 
export default async function Profile() {
  const session = await auth()
 
  if (!session) {
    redirect("/auth")
  }
 
  return (
    <div className="container">
      <pre>{session.user?.role} MON PROFIL</pre>
    </div>
  )
}