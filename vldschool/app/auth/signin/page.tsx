import { redirect } from "next/navigation";
import React from "react";
import { SignIn } from "../../components/goToAuthScreenButton";

export default function Login(authMode: string) {
  if (authMode === "signup") {
    return (
      <div>
          Signup
      </div>
    ) 
  } else {
    return (
        <div>
            <SignIn></SignIn>
        </div>
      ) 
  }
}
