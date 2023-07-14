"use client"

import { useState } from "react"
import { CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { FormControl } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import TitleHeader from "@/components/title-header"

export default function NewEducation() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div>
      <TitleHeader
        title="New Education"
        description="add your new education."
      />
      <div className="my-4 grid max-w-lg grid-cols-2 gap-4">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="fullname">Name</Label>
          <Input autoComplete="off" type="text" id="fullname" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="title">Job Title</Label>
          <Input autoComplete="off" type="text" id="title" />
        </div>
        <div className="grid items-center gap-1.5 col-span-2">
          <Label htmlFor="date">Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn("pl-3 text-left font-normal")}
              >
                <span className="text-muted-foreground">Pick a date</span>
                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                disabled={(date) =>
                  date > new Date() || date < new Date("1900-01-01")
                }
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <Button>Add Education</Button>
    </div>
  )
}
