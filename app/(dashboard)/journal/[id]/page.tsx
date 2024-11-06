import Editor from "@/components/editor"
import { prisma } from "@/utils/db"
import { getUserFromClerkId } from "@/utils/auth"
import { SidebarTrigger } from "@/components/ui/sidebar"
import NewJournalForm from "@/components/new-journal-form"
import { merriweather } from "@/utils/fonts"
import Link from "next/link"

const getEntry = async ({ id }: { id: any }) => {
  const user = await getUserFromClerkId()

  if (!id) {
    throw new Error("Entry ID is required")
  }

  const entry = await prisma.journalEntry.findUnique({
    where: {
      userId_id: {
        userId: user.id,
        id: id,
      },
    },
    include: {
      analysis: true,
    },
  })

  return entry
}

const EntryPage = async (props: { params: Promise<any> }) => {
  const params = await props.params
  const { id } = params

  const entry = await getEntry({ id })

  return (
    <div className="bg-[#1F1F1F] min-h-full flex flex-col text-white">
      <div className="border-gray-700 border-b py-3 px-5 h-14 flex justify-between items-center">
        <div className="flex gap-3 items-center justify-center">
          <SidebarTrigger />
          <h4
            className={`font-medium capitalize text-left ${merriweather.className}`}
          >
            {entry?.title}
          </h4>
        </div>

        <div className="flex gap-3 items-center justify-center">
          <Link href={`/edit-entry/${entry?.id}`} className="text-sm border border-white bg-white text-black px-3 py-2 rounded-lg font-medium">Edit entry</Link>
        </div>
      </div>

      <div className="p-5 md:p-10 flex flex-grow justify-center items-center w-full">
        <div className="flex flex-col w-full lg:w-3/4 space-y-2">
          <h1
            className={`font-medium capitalize text-left text-lg md:text-2xl ${merriweather.className}`}
          >
            {entry?.title}
          </h1>
          <p className="text-sm">{entry?.content}</p>
        </div>
      </div>
    </div>
  )
}

export default EntryPage
