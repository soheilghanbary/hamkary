import { type PropsWithChildren } from "react"

import { SiteLayout } from "./components/site-layout"

export default function SiteLayoutRoot({ children }: PropsWithChildren) {
  return <SiteLayout>{children}</SiteLayout>
}
