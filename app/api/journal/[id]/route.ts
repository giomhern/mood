import { getUserFromClerkId } from "@/utils/auth"
import { prisma } from "@/utils/db"
import { request } from "http"
import { NextResponse } from "next/server"
import { REPLCommand } from "repl"

export const PATCH = async (
  request: Request,
  props: { params: Promise<any> }
) => {
  const params = await props.params
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

export const DELETE = async (
  request: Request,
  { params }: { params: { id: string } } // Deconstructing params to get id directly
) => {
  const user = await getUserFromClerkId();

  try {
    await prisma.journalEntry.delete({
      where: {
        userId_id: {
          userId: user.id,
          id: params.id,
        },
      },
    });

    return NextResponse.json({ message: "Journal entry deleted successfully" });
  } catch (error) {
    console.error("Error deleting journal entry:", error);
    return NextResponse.json(
      { message: "Failed to delete journal entry" },
      { status: 500 }
    );
  }
};
