import { signIn } from "@/auth"
import TextWhiteButton from "./textWhiteButton"

export function SignInForm() {
  return (
    <div className="flex flex-col gap-5 items-center w-full">

      <form action={async () => {
        "use server"
        await signIn("google", { redirectTo: "/home"})
      }}
      
      className="w-full">

        <button type="submit" className="border-[1px] border-white rounded flex items-center gap-2 py-3 px-5 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
            <path fillRule="evenodd" d="M3 4.25A2.25 2.25 0 0 1 5.25 2h5.5A2.25 2.25 0 0 1 13 4.25v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 0-.75-.75h-5.5a.75.75 0 0 0-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 0 0 .75-.75v-2a.75.75 0 0 1 1.5 0v2A2.25 2.25 0 0 1 10.75 18h-5.5A2.25 2.25 0 0 1 3 15.75V4.25Z" clipRule="evenodd" />
            <path fillRule="evenodd" d="M19 10a.75.75 0 0 0-.75-.75H8.704l1.048-.943a.75.75 0 1 0-1.004-1.114l-2.5 2.25a.75.75 0 0 0 0 1.114l2.5 2.25a.75.75 0 1 0 1.004-1.114l-1.048-.943h9.546A.75.75 0 0 0 19 10Z" clipRule="evenodd" />
          </svg>
          <p>Se connecter avec Google</p>
        </button>

      </form>
      <div className="w-4/5 bg-white h-[1px] my-4"></div>
      <form
        action={async (formData) => {
          "use server"
          await signIn("credentials", formData)
        }}

        className="flex flex-col gap-2 w-full">

        <label>Email</label>
        <input name="email" type="email" className="bg-transparent border-2 border-white"/>

        <label>Password</label>
        <input name="password" type="password" />

        <button type="submit">
          <TextWhiteButton>
            <p>SE CONNECTER</p>
          </TextWhiteButton>
        </button>
      </form>

    </div>
  )
}