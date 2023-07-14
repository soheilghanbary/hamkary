import Link from "next/link"
import { Clock } from "lucide-react"

import { Button, buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import TitleHeader from "@/components/title-header"

export default function EducationPage() {
  return (
    <div>
      <TitleHeader title="Education" description="Manage your educations." />
      <div className="grid grid-cols-3 gap-4">
        <Card>
          <CardHeader className="relative">
            <CardTitle>Hamkary</CardTitle>
            <CardDescription>Full Stack Web Developer</CardDescription>
            <span className="absolute right-4 top-2 flex items-center text-xs text-muted-foreground">
              <Clock className="mr-1.5 h-3.5 w-3.5" />
              2015 ~ now
            </span>
          </CardHeader>
          <CardContent className="space-x-4">
            <Button variant={"default"}>Edit</Button>
            <Button variant={"destructive"}>Delete</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="relative">
            <CardTitle>KianTelecom</CardTitle>
            <CardDescription>SEO Engineer & Administrator</CardDescription>
            <span className="absolute right-4 top-2 flex items-center text-xs text-muted-foreground">
              <Clock className="mr-1.5 h-3.5 w-3.5" />
              2016 ~ 2021
            </span>
          </CardHeader>
          <CardContent className="space-x-4">
            <Button variant={"default"}>Edit</Button>
            <Button variant={"destructive"}>Delete</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>New Education</CardTitle>
            <CardDescription>insert on new your education</CardDescription>
          </CardHeader>
          <CardContent>
            <Link
              href={"/dashboard/education/new"}
              className={buttonVariants()}
            >
              Add Education
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
