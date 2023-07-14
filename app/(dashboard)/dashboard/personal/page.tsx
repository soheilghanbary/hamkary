import { getUser } from "@/actions"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TitleHeader from "@/components/title-header"

import BioContent from "./bio"
import ImageUpload from "./image-upload"
import InfoContent from "./info"

export default async function PersonalPage() {
  const user = await getUser()
  return (
    <>
      <TitleHeader
        title="Personal"
        description="Manage your personal account."
      />
      <Tabs defaultValue="information">
        <TabsList>
          <TabsTrigger value="information">Information</TabsTrigger>
          <TabsTrigger value="about">About Me</TabsTrigger>
          <TabsTrigger value="image">Upload Image</TabsTrigger>
        </TabsList>
        <TabsContent value="information">
          <InfoContent
            name={user?.name}
            title={user?.title}
            phone={user?.phone}
            location={user?.location}
          />
        </TabsContent>
        <TabsContent value="about">
          <BioContent bio={user?.bio} />
        </TabsContent>
        <TabsContent value="image">
          <ImageUpload />
        </TabsContent>
      </Tabs>
    </>
  )
}
