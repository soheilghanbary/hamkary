import Link from "next/link"
import Balance from "react-wrap-balancer"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { badgeVariants } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <section className="mx-auto flex w-full max-w-[64rem] flex-col items-center justify-center gap-4 pb-8 pt-6 text-center md:pb-12 md:pt-10 lg:py-32">
      <a
        target="_blank"
        href="https://twitter.com/soli_ghanbary"
        className={badgeVariants({ variant: "secondary" })}
      >
        follow me
      </a>
      <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
        {siteConfig.description}
      </h1>
      <Balance className="max-w-[46rem] text-lg text-muted-foreground sm:text-xl">
        Welcome to Hamkary, the ultimate destination for crafting dynamic
        resumes and building professional networks.
      </Balance>
      <div className="space-x-4">
        <Link
          href="/login"
          className={cn(
            buttonVariants({
              size: "lg",
            })
          )}
        >
          Get Started
        </Link>
        <Link
          href="/explore"
          className={cn(
            buttonVariants({
              variant: "outline",
              size: "lg",
            })
          )}
        >
          Explore
        </Link>
      </div>
    </section>
  )
}
