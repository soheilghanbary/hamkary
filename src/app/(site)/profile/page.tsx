import { Badge } from "@ui/badge"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function ProfilePage() {
  return (
    <div className="mx-auto max-w-screen-lg space-y-4 rounded-xl border bg-background p-4 shadow-sm">
      <section className="flex items-center justify-center gap-4">
        <Avatar className="size-24">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">سهیل قنبری</h2>
          <p className="text-sm text-muted-foreground">
            توسعه دهنده فول استک وب
          </p>
        </div>
      </section>
      <section className="space-y-3">
        <h3 className="text-xl font-semibold">درباره من</h3>
        <p className="text-sm leading-7 text-muted-foreground">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
          نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
          خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید
          داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به
          پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی
          سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        </p>
      </section>
      <section className="space-y-3">
        <h3 className="text-xl font-semibold">مهارت های من</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Badge variant={"secondary"}>React.JS</Badge>
          <Badge variant={"secondary"}>Vue.JS</Badge>
          <Badge variant={"secondary"}>HTML/CSS</Badge>
          <Badge variant={"secondary"}>Java Script</Badge>
          <Badge variant={"secondary"}>Type Script</Badge>
        </div>
      </section>
    </div>
  )
}
