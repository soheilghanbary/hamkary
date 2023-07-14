import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Icons } from "@/components/icons"
import TitleHeader from "@/components/title-header"

export default function SocialPage() {
  return (
    <div>
      <TitleHeader title="Social" description="manage your social urls" hr />
      <div className="grid max-w-xl grid-cols-2 gap-4">
        <div className="space-y-2.5">
          <Label className="flex items-center">
            <Icons.linkedin className="mr-2 h-4 w-4" /> Linkedin
          </Label>
          <Input type="text" />
        </div>
        <div className="space-y-2.5">
          <Label className="flex items-center">
            <Icons.twitter className="mr-2 h-4 w-4" /> Twitter
          </Label>
          <Input type="text" />
        </div>
        <div className="space-y-2.5">
          <Label className="flex items-center">
            <Icons.facebook className="mr-2 h-4 w-4" /> Facebook
          </Label>
          <Input type="text" />
        </div>
        <div className="space-y-2.5">
          <Label className="flex items-center">
            <Icons.instagram className="mr-2 h-4 w-4" /> Instagram
          </Label>
          <Input type="text" />
        </div>
        <div className="col-span-2 space-y-2.5">
          <Label className="flex items-center">
            <Icons.website className="mr-2 h-4 w-4" /> Website
          </Label>
          <Input type="text" />
        </div>
      </div>
      <Button className="mt-4">Save</Button>
    </div>
  )
}
