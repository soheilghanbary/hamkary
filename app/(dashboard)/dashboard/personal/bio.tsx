"use client"

import { useRef, useTransition } from "react"
import { updateBio } from "@/actions"
import { toast, Toaster } from "sonner"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface Props {
  bio: string | null | undefined
}

export default function BioContent({ bio }: Props) {
  const [isPending, startTransition] = useTransition()
  const bioRef = useRef<HTMLTextAreaElement>(null)

  const onBioUpdate = () => {
    startTransition(async () => {
      await updateBio(bioRef.current?.value as string)
      toast.success("Bio Updated!")
    })
  }

  return (
    <>
      <div className="mt-4 grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="birthday">About Me</Label>
        <Textarea rows={6} ref={bioRef} defaultValue={bio as string} />
      </div>
      <Button disabled={isPending} onClick={onBioUpdate} className="mt-4">
        {isPending ? "Saving..." : "Save"}
      </Button>
      <Toaster richColors />
    </>
  )
}
