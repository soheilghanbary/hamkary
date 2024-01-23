import { getUserBySession } from "@server/user"
import { Badge } from "@ui/badge"
import { Separator } from "@ui/separator"
import { Facebook, Github, Instagram, X } from "iconoir-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default async function UserPage() {
  const user = await getUserBySession()
  return (
    <div className="grid grid-cols-3 gap-4">
      <section className="col-span-1 space-y-4">
        <div className="space-y-4 rounded-xl border bg-background p-4 shadow-sm">
          <div className="flex items-center gap-4">
            <Avatar className="size-24">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="space-y-2">
              <h2 className="text-lg font-semibold">{user?.name}</h2>
              <p className="font-medium text-muted-foreground">{user?.title}</p>
            </div>
          </div>
          <Separator />
          <div className="space-y-2">
            <p>
              <span className="text-muted-foreground">نام کاربری : </span>
              soheil@
            </p>
            <p>
              <span className="text-muted-foreground">شماره تلفن:</span>{" "}
              09199973120
            </p>
            <p>
              <span className="text-muted-foreground">سال تولد :</span>{" "}
              1380/07/07
            </p>
            <p>
              <span className="text-muted-foreground">محل تولد :</span> تهران
            </p>
          </div>
        </div>
        <div className="space-y-4 rounded-xl border bg-background p-4 shadow-sm">
          <h3 className="text-lg font-semibold">شبکه های اجتماعی</h3>
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-secondary p-2 text-secondary-foreground">
              <Github className="size-5" />
            </div>
            <div className="rounded-xl bg-secondary p-2 text-secondary-foreground">
              <Facebook className="size-5" />
            </div>
            <div className="rounded-xl bg-secondary p-2 text-secondary-foreground">
              <X className="size-5" />
            </div>
            <div className="rounded-xl bg-secondary p-2 text-secondary-foreground">
              <Github className="size-5" />
            </div>
            <div className="rounded-xl bg-secondary p-2 text-secondary-foreground">
              <Instagram className="size-5" />
            </div>
          </div>
        </div>
      </section>
      <section className="col-span-2 space-y-4">
        <div className="break-inside-avoid space-y-4 rounded-xl border bg-background p-4 shadow-sm">
          <h2 className="text-lg font-semibold text-foreground">درباره من</h2>
          <p className="text-sm leading-7 text-muted-foreground md:text-base md:leading-8">
            {user?.bio}
          </p>
        </div>
        <div className="break-inside-avoid space-y-4 rounded-xl border bg-background p-4 shadow-sm">
          <h2 className="text-lg font-semibold text-foreground">
            مهارت های من
          </h2>
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant={"secondary"}>React.JS</Badge>
            <Badge variant={"secondary"}>HTML/CSS</Badge>
            <Badge variant={"secondary"}>TypeScript</Badge>
            <Badge variant={"secondary"}>Redux</Badge>
            <Badge variant={"secondary"}>Next.JS</Badge>
            <Badge variant={"secondary"}>Python</Badge>
          </div>
        </div>
        <div className="break-inside-avoid space-y-4 rounded-xl border bg-background p-4 shadow-sm">
          <h2 className="text-lg font-semibold text-foreground">درباره من</h2>
          <p className="text-sm leading-7 text-muted-foreground">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
          </p>
        </div>
      </section>
    </div>
  )
}
