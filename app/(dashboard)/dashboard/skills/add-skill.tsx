"use client"

import { FormEvent, useRef, useState, useTransition } from "react"
import { updateSkills } from "@/actions"
import { toast, Toaster } from "sonner"

import { Input } from "@/components/ui/input"
import { Icons } from "@/components/icons"

interface Props {
  skills?: string[]
}

export default function AddSkill({ skills }: Props) {
  const [isPending, startTransition] = useTransition()
  const [skill, setSkill] = useState<string>("")
  const newSkills = [...(skills ?? []), skill]
  const onAddSkill = (e: FormEvent) => {
    e.preventDefault()
    if (!skill.length) return
    startTransition(async () => {
      await updateSkills(newSkills)
      toast.success(`${skill} Added to your Skills!`)
      setSkill("")
    })
  }
  return (
    <>
      <form onSubmit={onAddSkill} className="relative">
        <Input
          autoFocus
          disabled={isPending}
          type="text"
          placeholder="your skill"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
        />
        {isPending && (
          <span className="absolute right-2 top-1/2 -translate-y-1/2">
            <Icons.spinner className="h-4 w-4 animate-spin" />
          </span>
        )}
      </form>
      <Toaster richColors />
    </>
  )
}
