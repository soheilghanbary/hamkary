import { type PropsWithChildren } from "react"

import { Footer } from "./footer"
import { Header } from "./header"

export const SiteLayout = ({ children }: PropsWithChildren) => {
  return (
    <section>
      <Header />
      <main className="container mx-auto p-4">{children}</main>
      <Footer />
    </section>
  )
}
