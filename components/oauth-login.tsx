"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"

import { Icons } from "./icons"
import { Button } from "./ui/button"

export default function OAuthForm() {
  const [isLoading, setIsLoading] = useState(false)

  function onSignIn() {
    setIsLoading(true)
    signIn("github")
    setIsLoading(false)
  }

  return (
    <>
      <Button onClick={onSignIn} variant={"outline"}>
        {isLoading ? (
          <Icons.spinner
            className="mr-2 h-4 w-4 animate-spin"
            aria-hidden="true"
          />
        ) : (
          <Icons.gitHub className="mr-2 h-4 w-4" aria-hidden="true" />
        )}
        Github
      </Button>
    </>
  )
}
