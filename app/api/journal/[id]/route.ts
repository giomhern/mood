import { getUserFromClerkId } from "@/utils/auth"
import { prisma } from "@/utils/db"
import { NextResponse } from "next/server"

export const PATCH = async (request: Request, props: { params: Promise<any> }) => {
  const params = await props.params;
  const { content } = await request.json()
  const user = await getUserFromClerkId()

  const updatedEntry = await prisma.journalEntry.update({
    where: {
      userId_id: {
        userId: user.id,
        id: params.id,
      },
    },
    data: { content },
  })



  return NextResponse.json({ data: updatedEntry })
}
