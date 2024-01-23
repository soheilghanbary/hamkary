import { TextField } from "@components/common/TextField"
import { Button } from "@ui/button"
import { Input } from "@ui/input"
import { Bookmark, City, DollarCircle, MapPin, Suitcase } from "iconoir-react"

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
      <div className="flex gap-4">
        <aside className="sticky top-20 h-fit w-64 space-y-4 rounded-lg border bg-background p-4 shadow-sm">
          <h1 className="text-2xl font-bold text-primary">مشاغل</h1>
          <Input placeholder="عنوان شغل" />
          <Input placeholder="محل سکونت" />
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
    <div className="relative flex cursor-pointer gap-4 space-y-4 rounded-lg border bg-background p-5 shadow-sm">
      <div className="size-24 rounded-lg bg-secondary/50"></div>
      <div className="flex-1 space-y-2">
        <h2 className="text-balance text-base font-medium">
          برنامه نویس فرانت اند (Middle React.JS)
        </h2>
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground [&>p]:pt-0.5">
            <City className="size-4" />
            <p>شرکت کیان تلکام</p>
          </div>
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
        <p className="absolute bottom-3.5 right-3.5 text-xs text-muted-foreground">
          3 روز پیش
        </p>
        <div className="flex justify-end gap-2">
          <Button>ارسال رزومه</Button>
          <Button variant={"outline"}>
            <Bookmark className="ml-2 size-4" />
            <span className="pt-0.5">نشان کردن</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
