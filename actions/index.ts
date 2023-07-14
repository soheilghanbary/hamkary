"use server"

import { revalidatePath } from "next/cache"
import { getServerSession } from "next-auth"

import { prisma } from "@/lib/db"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

interface InfoProps {
  name: string
  title: string
  phone: string
  location: string
}

export async function updateBio(bio: string) {
  const session = await getServerSession(authOptions)
  const id = session?.user?.id as string
  await prisma.user.update({ where: { id }, data: { bio } })
  revalidatePath("/dashboard/personal")
}

export async function updateInformation(info: InfoProps) {
  const session = await getServerSession(authOptions)
  const id = session?.user?.id as string
  await prisma.user.update({ where: { id }, data: { ...info } })
  revalidatePath("/dashboard/personal")
}

// get All Skills
export async function getSkills() {
  const session = await getServerSession(authOptions)
  const id = session?.user?.id as string
  const user = await prisma.user.findFirst({
    where: { id },
    select: { skills: true },
  })
  return user?.skills
}

export async function updateSkills(skills: string[]) {
  const session = await getServerSession(authOptions)
  const id = session?.user?.id as string
  await prisma.user.update({ where: { id }, data: { skills } })
  revalidatePath("/dashboard/skills")
}

export async function deleteSkill(skill: string) {
  const session = await getServerSession(authOptions)
  const id = session?.user?.id as string
  const user = await prisma.user.findFirst({
    where: { id },
    select: { skills: true },
  })
  const updatedSkills = user?.skills.filter((s) => s !== skill)
  await prisma.user.update({ where: { id }, data: { skills: updatedSkills } })
  revalidatePath("/dashboard/skills")
}

export async function getUser() {
  const session = await getServerSession(authOptions)
  const id = session?.user?.id as string
  return await prisma.user.findFirst({ where: { id } })
}
