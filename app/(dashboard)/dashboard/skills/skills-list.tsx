"use client"

import { useTransition } from "react"
import { deleteSkill } from "@/actions"
import { toast, Toaster } from "sonner"

import { Button } from "@/components/ui/button"

interface Props {
  skills?: string[]
}

export default function SKillsList({ skills }: Props) {
  return (
    <>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        {skills?.map((skill) => (
          <SkillsItem key={skill} title={skill} />
        ))}
      </div>
      <Toaster richColors />
    </>
  )
}

const SkillsItem = ({ title }: { title: string }) => {
  const [isPending, startTransition] = useTransition()
  const onDelete = () =>
    startTransition(async () => {
      await deleteSkill(title)
      toast.error(`${title} Deleted on your Skills`)
    })
  return (
    <>
      <Button variant={"secondary"} onClick={onDelete} disabled={isPending}>
        {title}
      </Button>
    </>
  )
}
