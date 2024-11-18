import React from "react"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { prisma } from "@/utils/db"
import { getUserFromClerkId } from "@/utils/auth"
import EntryCard from "@/components/entry-card"

const getAllEntries = async () => {
  const { id } = await getUserFromClerkId()
  const entries = await prisma.journalEntry.findMany({
    where: {
      userId: id,
    },
  })
  return entries
}

const AllEntries = async () => {
  const entries = await getAllEntries()
  return (
    <div className="bg-[#1F1F1F] min-h-full flex flex-col text-white">
      <div className="border-gray-700 border-b py-3 px-5 h-14 flex justify-between items-center">
        <div className="flex gap-3 items-center justify-center">
          <SidebarTrigger />
          <h1 className="font-medium">All Entries</h1>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3 p-5">
        {entries.map((entry) => (
          <EntryCard key={entry.id} entry={entry} />
        ))}
      </div>
    </div>
  )
}

export default AllEntries
