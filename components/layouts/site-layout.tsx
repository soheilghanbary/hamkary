import { ReactNode } from "react"

import AuthProvider from "../auth-provider"
import { ThemeProvider } from "../theme-provider"
import SiteFooter from "./site-footer"
import { SiteHeader } from "./site-header"

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <div className="container mx-auto mt-2 mb-4 flex-1">{children}</div>
          <SiteFooter />
        </div>
      </ThemeProvider>
    </AuthProvider>
  )
}
