import { getSkills } from "@/actions"

import TitleHeader from "@/components/title-header"

import AddSkill from "./add-skill"
import SKillsList from "./skills-list"

interface Props {}

const skills = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Sass",
  "HTML5",
  "Redux",
  "UI/UX",
  "TailwindCss",
  "SEO / WordPress",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
]

export default async function SkillsPage() {
  const skills = await getSkills()
  return (
    <div>
      <TitleHeader title="Skills" description="add your skills and share it" />
      <AddSkill skills={skills} />
      <SKillsList skills={skills} />
    </div>
  )
}
