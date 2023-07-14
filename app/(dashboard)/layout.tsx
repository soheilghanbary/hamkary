import { ReactNode } from "react"
import type { Metadata } from "next"

import Sidebar from "@/components/sidebar"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "manage your stores",
}

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="flex gap-8 pt-2">
        <Sidebar />
        <div className="flex-1">{children}</div>
      </div>
    </>
  )
}
