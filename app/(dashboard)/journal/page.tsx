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

  await analyze(`Today was pretty much the same as any other day, nothing too exciting but not boring either. I woke up to the sunlight sneaking through my curtains, and it felt like just another day on autopilot. School was fine—no big drama, no surprising moments, just the usual stuff. I hung out with my friends during lunch, talked about random things, and then headed home. It’s like everything is just going along, not really changing, just steady. Sometimes I wonder if I should be doing something more, but then again, maybe it's okay to have days like this, where nothing really stands out.`);

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
