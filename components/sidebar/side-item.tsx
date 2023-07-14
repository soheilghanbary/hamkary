import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

interface SidebarItemProps {
  title: string
  href: string
  icon: any
}

const SidebarItem = ({ title, icon, href }: SidebarItemProps) => {
  const Icon = icon
  const pathname = usePathname()
  return (
    <Link
      href={href}
      className={cn(
        "flex cursor-pointer items-center rounded-md border border-transparent px-2 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
        pathname === href ? "bg-muted text-foreground" : ""
      )}
    >
      <Icon className="mr-4 h-4 w-4" />
      {title}
    </Link>
  )
}

export default SidebarItem
