// import { analyze } from "@/utils/ai"
import { getUserFromClerkId } from "@/utils/auth"
import { prisma } from "@/utils/db"
import { revalidatePath } from "next/cache"
import { NextResponse } from "next/server"

export const POST = async (req: Request) => {
  try {
    const user = await getUserFromClerkId()

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    const { title, content, comments } = await req.json()

    const entry = await prisma.journalEntry.create({
      data: {
        userId: user.id,
        content,
        title,
        comments,
      },
    })

    revalidatePath("/journal")

    return NextResponse.json({ data: entry })
  } catch (error) {
    console.error("Error in POST handler:", error)
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    )
  }
}
