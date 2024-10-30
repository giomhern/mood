import EmptyJournalView from "@/components/empty-journal-view"
import EntryCard from "@/components/entry-card"
import NewEntryButton from "@/components/new-journal-button"
import { analyze } from "@/utils/ai"
import { getUserFromClerkId } from "@/utils/auth"
import { prisma } from "@/utils/db"
import { merriweather } from "@/utils/fonts"
import Link from "next/link"
import { SidebarTrigger } from "@/components/ui/sidebar"

const getEntries = async () => {
  const user = await getUserFromClerkId()

  const entries = await prisma.journalEntry.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  })

  return entries
}

const JournalPage = async () => {
  const entries = await getEntries()
  return (
    <div className="bg-[#1F1F1F] min-h-screen flex flex-col text-white">
      <div className="border-gray-700 border-b py-3 px-5 h-14 flex justify-between items-center">
        <div className="flex gap-3 items-center justify-center">
        <SidebarTrigger />
        <h1 className="font-medium">Home</h1>
        </div>
        <NewEntryButton />
      </div>
      <div className="flex-grow flex items-center justify-center">
        {entries.length > 0 ? (
          <EmptyJournalView />
        ) : (
          <EmptyJournalView />
        )}
      </div>
    </div>
  );
}

export default JournalPage
