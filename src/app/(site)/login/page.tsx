import { type Metadata } from "next"
import { redirect } from "next/navigation"
import { TextLine } from "@components/common/text-line"
import { LogoIcon } from "@components/icons"
import { UserOAuth } from "@components/user-oauth"
import { getUserSession } from "@lib/user-session"
import { Button } from "@ui/button"
import { Input } from "@ui/input"

export const metadata: Metadata = {
  title: "login",
  description: "login page | insta ",
}

export default async function LoginPage() {
  const session = await getUserSession()

  if (session) return redirect("/dashboard")

  return (
    <div className="flex h-full items-center justify-center md:my-32">
      <div className="w-full max-w-sm space-y-3">
        <div className="space-y-1 pb-2">
          <h1 className="flex items-center gap-2 text-2xl font-semibold [&>svg]:size-6">
            <LogoIcon />
            وارد شوید
          </h1>
          <p className="text-sm text-muted-foreground">
            برای ادامه به دسترسی همکاری وارد حساب کاربری شوید
          </p>
        </div>
        <Input type="text" placeholder="آدرس ایمیل" />
        <Button className="w-full">ورود به حساب</Button>
        <TextLine text="لاگین شدن با" />
        <UserOAuth />
      </div>
    </div>
  )
}
