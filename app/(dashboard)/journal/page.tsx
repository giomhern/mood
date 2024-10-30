import EmptyJournalView from "@/components/empty-journal-view"
import NewEntryButton from "@/components/new-journal-button"
import { getUserFromClerkId } from "@/utils/auth"
import { prisma } from "@/utils/db"
import { SidebarTrigger } from "@/components/ui/sidebar"
import JournalEntries from "@/components/journal-entries"

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
    <div className="bg-[#1F1F1F] min-h-full flex flex-col text-white">
      <div className="border-gray-700 border-b py-3 px-5 h-14 flex justify-between items-center">
        <div className="flex gap-3 items-center justify-center">
        <SidebarTrigger />
        <h1 className="font-medium">Home</h1>
        </div>
        <NewEntryButton />
      </div>
      <div className="flex-grow flex items-center justify-center">
        {entries.length > 0 ? (
          <JournalEntries entries={entries} />
        ) : (
          <EmptyJournalView />
        )}
      </div>
    </div>
  );
}

export default JournalPage
