"use client"

import { forwardRef, Ref, useRef, useTransition } from "react"
import { updateInformation } from "@/actions"
import { toast, Toaster } from "sonner"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface Props {
  title: string | null | undefined
  name: string | null | undefined
  location: string | null | undefined
  phone: string | null | undefined
}

export default function InfoContent({ title, name, location, phone }: Props) {
  const [isPending, startTransition] = useTransition()
  const titleRef = useRef<HTMLInputElement>(null)
  const nameRef = useRef<HTMLInputElement>(null)
  const locationRef = useRef<HTMLInputElement>(null)
  const phoneRef = useRef<HTMLInputElement>(null)

  const onUpdate = () => {
    const info = {
      title: titleRef.current?.value as string,
      location: locationRef.current?.value as string,
      name: nameRef.current?.value as string,
      phone: phoneRef.current?.value as string,
    }
    startTransition(async () => {
      await updateInformation(info)
      toast.success("user information has been updated!")
    })
  }

  return (
    <>
      <form onSubmit={onUpdate}>
        <div className="mt-4 grid max-w-lg grid-cols-2 gap-4">
          <InputField label="Name" value={name} ref={nameRef} />
          <InputField label="Title" value={title} ref={titleRef} />
          <InputField label="Location" value={location} ref={locationRef} />
          <InputField label="Phone" value={phone} ref={phoneRef} />
        </div>
        <Button disabled={isPending} onClick={onUpdate} className="mt-4">
          {isPending ? "Loading" : "Save"}
        </Button>
      </form>
      <Toaster richColors />
    </>
  )
}

type InputFieldProps = {
  label: string
  value: string | null | undefined
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, value }, ref: Ref<HTMLInputElement>) => {
    const name = label.toLowerCase()

    return (
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor={name}>{label}</Label>
        <Input
          ref={ref}
          name={label}
          id={name}
          autoComplete="off"
          type="text"
          defaultValue={value as string}
        />
      </div>
    )
  }
)

InputField.displayName = "InputField"
