import Link from "next/link"

import { siteConfig, siteFooter } from "@/config/site"
import { cn } from "@/lib/utils"

import { Icons } from "../icons"
import { ThemeToggle } from "../theme-toggle"
import { buttonVariants } from "../ui/button"

export default function SiteFooter() {
  return (
    <footer className="w-full border-t bg-background">
      <section className="container mx-auto grid grid-cols-5 gap-8 py-10">
        <div>
          <Link href="/" className="flex items-center space-x-2">
            <Icons.logo className="h-6 w-6" />
            <span className="inline-block font-bold">{siteConfig.name}</span>
          </Link>
        </div>
        <div className="space-y-4">
          <h4 className="text-base font-medium">Top Users</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {siteFooter.users.map((p) => (
              <li>{p.title}</li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="text-base font-medium">Pages</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {siteFooter.pages.map((p) => (
              <li>{p.title}</li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="text-base font-medium">Social</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {siteFooter.social.map((p) => (
              <li>{p.title}</li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="text-base font-medium">Song</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {siteFooter.song.map((p) => (
              <li>{p.title}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="container mx-auto flex items-center justify-between pb-4 pt-6">
        <p className="text-sm text-muted-foreground">Built by TonyCore</p>
        <div className="flex items-center space-x-1">
          <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
            <div
              className={cn(
                buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })
              )}
            >
              <Icons.gitHub className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only">GitHub</span>
            </div>
          </Link>
          <ThemeToggle />
        </div>
      </section>
    </footer>
  )
}
