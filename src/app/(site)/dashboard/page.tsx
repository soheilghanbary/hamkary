import { Button } from "@ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@ui/card"
import { Input } from "@ui/input"
import { Textarea } from "@ui/textarea"
import {
  DashboardSpeed,
  Flash,
  Internet,
  Link,
  Mail,
  Settings,
  Suitcase,
  User,
} from "iconoir-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Dashboard() {
  return (
    <div className="mx-auto flex max-w-screen-lg gap-4">
      <div className="w-64">
        <aside className="w-full rounded-xl border bg-background p-4 shadow">
          <div className="grid gap-1.5">
            <div className="flex cursor-pointer items-center gap-4 rounded-md px-3 py-2 text-muted-foreground duration-200 hover:bg-muted hover:text-foreground">
              <DashboardSpeed className="size-5" />
              <span className="pt-0.5">داشبورد</span>
            </div>
            <div className="flex cursor-pointer items-center gap-4 rounded-md px-3 py-2 text-muted-foreground duration-200 hover:bg-muted hover:text-foreground">
              <Flash className="size-5" />
              <span className="pt-0.5">ثبت اگهی</span>
            </div>
            <div className="flex cursor-pointer items-center gap-4 rounded-md px-3 py-2 text-muted-foreground duration-200 hover:bg-muted hover:text-foreground">
              <Mail className="size-5" />
              <span className="pt-0.5">درخواست ها</span>
            </div>
            <div className="flex cursor-pointer items-center gap-4 rounded-md px-3 py-2 text-muted-foreground duration-200 hover:bg-muted hover:text-foreground">
              <Settings className="size-5" />
              <span className="pt-0.5">تنظیمات</span>
            </div>
          </div>
        </aside>
      </div>
      <section className="grid flex-1 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>اطلاعات شخصی</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Avatar className="size-24 hover:brightness-90">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="grid grid-cols-3 gap-4">
              <Input placeholder="نام و نام خانوادگی" />
              <Input placeholder="عنوان شغلی" />
              <Input placeholder="شماره تلفن" />
            </div>
            <Button>ذخیره</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>توضیحات</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea placeholder="درباره من" rows={6} />
            <Button>ذخیره</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>مهارت های من</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex max-w-sm items-center gap-4">
              <Input placeholder="عنوان" />
              <Button variant={"secondary"}>اضافه کردن</Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
