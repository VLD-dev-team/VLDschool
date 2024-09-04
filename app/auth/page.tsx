import { auth } from "@/auth"
import { redirect } from "next/navigation"
import AuthForm from "./components/AuthForm";

export default async function Page() {
  const session = await auth();
  if (session) {
    redirect('/dashboard')
  }

  return (
    <div className="h-full w-full md:basis-1/2 flex items-center">
      <AuthForm></AuthForm>
    </div>
  )
}
