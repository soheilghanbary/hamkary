import { TextField } from "@components/common/TextField"
import { Button } from "@ui/button"
import { DollarCircle, MapPin, Suitcase } from "iconoir-react"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function JobsPage() {
  return (
    <section className="space-y-8">
      <div className="flex gap-8">
        <aside className="w-60 space-y-4">
          <h1 className="text-2xl font-bold text-primary">مشاغل</h1>
          <TextField label="عنوان شغل" />
          <TextField label="محل سکونت" />
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="دسته بندی" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">برنامه نویس</SelectItem>
              <SelectItem value="dark">حسابداری</SelectItem>
              <SelectItem value="system">معماری</SelectItem>
            </SelectContent>
          </Select>
          <Button variant={"secondary"}>جستجو</Button>
        </aside>
        <div className="grid flex-1 grid-cols-2 gap-4">
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </div>
      </div>
    </section>
  )
}

const JobCard = () => {
  return (
    <div className="flex cursor-pointer gap-4 space-y-4 rounded-lg border p-6 shadow-sm">
      <div className="size-24 rounded-lg bg-secondary"></div>
      <div className="space-y-2">
        <h2 className="text-balance text-base font-medium">
          برنامه نویس فرانت اند (Middle React.JS)
        </h2>
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground [&>p]:pt-0.5">
            <MapPin className="size-4" />
            <p>ایران، یزد</p>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground [&>p]:pt-0.5">
            <Suitcase className="size-4" />
            <p>دورکاری - تمام وقت</p>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground [&>p]:pt-0.5">
            <DollarCircle className="size-4" />
            <p>34,000,000 تومان / ماهانه</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button>ارسال رزومه</Button>
          <Button variant={"outline"}>نشان کردن</Button>
        </div>
      </div>
    </div>
  )
}
