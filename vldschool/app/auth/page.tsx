import { auth } from "@/auth"
import { redirect } from "next/navigation"
import GoogleAuthButton from "./components/GoogleForm"
import { authGetSession } from "./authServerActions";
import EmailForm from "./components/EmailForm";

export default async function Page() {
  const session = await auth();
  if (session) {
    redirect('/app')
  }

  return (
    <div className="h-full md:basis-1/2 flex items-center">
      <div className="w-full">
        <GoogleAuthButton />
        <EmailForm />
      </div>
    </div>
  )
}
