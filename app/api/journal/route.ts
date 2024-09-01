import { analyze } from "@/utils/ai"
import { getUserFromClerkId } from "@/utils/auth"
import { prisma } from "@/utils/db"
import { revalidatePath } from "next/cache"
import { NextResponse } from "next/server"

export const POST = async () => {
  try {
    const user = await getUserFromClerkId()

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    const entry = await prisma.journalEntry.create({
      data: {
        userId: user.id,
        content: "Write about your day!",
      },
    })

    console.log(entry.content)

    const analysis = await analyze(entry.content)
    if (!analysis) {
      return NextResponse.json({ error: "Analysis failed" }, { status: 500 })
    }

    await prisma.analysis.create({
      data: {
        entryId: entry.id,
        ...analysis,
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
