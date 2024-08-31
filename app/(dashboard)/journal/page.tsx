import EntryCard from "@/components/EntryCard"
import NewEntryButton from "@/components/NewEntryButton"
import { analyze } from "@/utils/ai"
import { getUserFromClerkId } from "@/utils/auth"
import { prisma } from "@/utils/db"
import Link from "next/link"

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
    <div className="p-10">
      <div className="flex justify-between pb-5">
        <h2 className="text-3xl font-semibold">journal</h2>
        <NewEntryButton />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {entries.map((entry) => (
          <Link key={entry.id} href={`/journal/${entry.id}`}>
            <EntryCard key={entry.id} entry={entry} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default JournalPage
