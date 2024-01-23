import Link from "next/link"
import { icons, LogoIcon } from "@components/icons/iconoir"
import { ModeToggle } from "@components/mode-toggle"
import { cn } from "@lib/utils"
import { buttonVariants } from "@ui/button"

import styles from "./header.module.scss"

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <LogoIcon />
          <h3>همکاری</h3>
        </div>
        <div className={styles["nav-links"]}>
          <Link href={"/"}>صفحه اصلی</Link>
          <Link href={"/jobs"}>جستجو</Link>
          <Link href={"/top-companies"}>برترین شرکت ها</Link>
          <Link href={"/about"}>درباره ما</Link>
          <Link href={"/contact"}>تماس با ما</Link>
          <Link href={"/login"}>وارد شوید</Link>
        </div>
        <Link
          href={"/tonycore"}
          className={cn(buttonVariants({ variant: "outline" }))}
        >
          <icons.user className="ml-1.5 size-4" />
          حساب کاربری
        </Link>
        <ModeToggle />
      </nav>
    </header>
  )
}
