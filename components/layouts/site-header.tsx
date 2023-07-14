import Link from "next/link"
import { SearchIcon } from "lucide-react"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <SearchBox />
            <Link
              href={"/login"}
              className={buttonVariants({ variant: "default", size: "sm" })}
            >
              Sign In
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

const SearchBox = () => (
  <Button
    variant="outline"
    className="relative h-9 w-9 p-0 xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2"
  >
    <SearchIcon className="h-4 w-4 xl:mr-2" aria-hidden="true" />
    <span className="hidden xl:inline-flex">Search ...</span>
    <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 xl:flex">
      <span className="text-xs">Ctrl</span>K
    </kbd>
  </Button>
)
