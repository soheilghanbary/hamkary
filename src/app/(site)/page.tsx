import { icons } from "@components/icons/iconoir"
import { siteConfig } from "@config/site"
import { Button } from "@ui/button"

const Hero = () => (
  <section className="flex h-[30em] flex-col items-center justify-center gap-4 px-8 text-center md:h-[16em]">
    <h1 className="mx-auto max-w-[48rem] text-center text-3xl font-black leading-relaxed md:text-5xl md:leading-relaxed">
      {siteConfig.title}
    </h1>
    <p className="text-center text-sm leading-6 text-foreground/80 md:text-base">
      {siteConfig.description}
    </p>
    <div className="mt-2 grid grid-cols-2 gap-4">
      <Button>شروع کنید</Button>
      <Button variant={"outline"}>درباره ما</Button>
    </div>
  </section>
)

export default function HomePage() {
  return (
    <div className="space-y-8">
      <Hero />
      <AboutMe />
      <Services />
      <section className="space-y-4 text-center">
        <h1 className="text-2xl font-semibold">با افتخار منبع باز</h1>
        <p className="leading-6 text-muted-foreground">
          Hamkary منبع باز است و توسط نرم افزار منبع باز ارائه می شود. کد در
          <a
            href="https://github.com/soheilghanbary/hamkary"
            className="font-medium text-foreground"
          >
            {" "}
            GitHub
          </a>{" "}
          موجود است.
        </p>
      </section>
    </div>
  )
}

const AboutMe = () => (
  <div className="mx-auto max-w-2xl space-y-6 text-center">
    <h2 className="text-2xl font-semibold">همکاری چیست؟</h2>
    <p className="text-balance text-sm leading-7 text-muted-foreground">
      همکاری یک سایت کاریایی توسعه دهنده است که با هدف ایجاد تعامل و همکاری بین
      افراد علاقه‌مند به حوزه‌های مختلف توسعه، ارتقاء و یادگیری فناوری فراهم شده
      است. این جامعه آنلاین، فرصتی مناسب برای برقراری ارتباطات حرفه‌ای، به
      اشتراک گذاری تجربیات، و تبادل ایده‌ها در زمینه‌های نرم‌افزاری، طراحی و
      توسعه وب، هوش مصنوعی، و سایر حوزه‌های فناوری ایجاد می‌کند.
    </p>
  </div>
)

const Services = () => (
  <section className="space-y-8">
    <h2 className="text-center text-2xl font-bold">ویژگی های پلتفرم همکاری</h2>
    <div className="grid grid-cols-3 gap-8">
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
    </div>
  </section>
)

const ServiceCard = () => {
  return (
    <div className="flex cursor-pointer flex-col items-center justify-center space-y-4 rounded-lg border bg-background p-6 shadow-sm ring-primary duration-150 hover:ring-2">
      <icons.github className="size-7" />
      <h2 className="text-xl font-semibold">مدرن و ساده</h2>
      <p className="text-sm leading-6 text-foreground/80 md:text-base">
        {siteConfig.description}
      </p>
    </div>
  )
}
