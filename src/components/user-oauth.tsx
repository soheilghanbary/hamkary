"use client"

import { useState } from "react"
import { Button } from "@ui/button"
import { Github, Google } from "iconoir-react"
import { signIn } from "next-auth/react"

import { Icons } from "./icons"

export const UserOAuth = () => {
  const [loading, setLoading] = useState({
    github: false,
    google: false,
  })

  const onAuth = async (provider: "google" | "github") => {
    provider === "github"
      ? setLoading({ github: true, google: false })
      : setLoading({ github: false, google: true })
    return await signIn(provider)
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      <Button
        variant={"secondary"}
        disabled={loading.github}
        onClick={() => onAuth("github")}
      >
        {loading.github ? (
          <Icons.spinner className="ml-2 size-5 animate-spin" />
        ) : (
          <Github className="ml-2 size-5" />
        )}
        گیت ها
      </Button>
      <Button
        variant={"secondary"}
        disabled={loading.google}
        onClick={() => onAuth("google")}
      >
        {loading.google ? (
          <Icons.spinner className="ml-2 size-5 animate-spin" />
        ) : (
          <Google className="ml-2 size-5" />
        )}
        گوگل
      </Button>
    </div>
  )
}
