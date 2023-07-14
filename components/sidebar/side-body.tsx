"use client"

import { DashboardIcon } from "@radix-ui/react-icons"
import {
  Atom,
  Building,
  GraduationCap,
  Rss,
  Settings2,
  StoreIcon,
  User2,
  UserIcon,
} from "lucide-react"

import SidebarItem from "./side-item"

const SidebarBody = () => {
  return (
    <ul className="space-y-1">
      <SidebarItem title="Dashboard" icon={DashboardIcon} href="/dashboard" />
      <SidebarItem
        title="Personal"
        icon={UserIcon}
        href="/dashboard/personal"
      />
      <SidebarItem
        title="Education"
        icon={GraduationCap}
        href="/dashboard/education"
      />
      <SidebarItem
        title="Exprience"
        icon={Building}
        href="/dashboard/exprience"
      />
      <SidebarItem title="Skills" icon={Atom} href="/dashboard/skills" />
      <SidebarItem title="Social Media" icon={Rss} href="/dashboard/social" />
      <SidebarItem
        title="Settings"
        icon={Settings2}
        href="/dashboard/settings"
      />
    </ul>
  )
}

export default SidebarBody
