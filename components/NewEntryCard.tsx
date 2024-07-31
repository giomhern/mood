"use client"

import { createNewEntry } from "@/utils/api"
import { useRouter } from "next/navigation"

const NewEntryCard = () => {
  const router = useRouter()
  const handleOnClick = async () => {
    const data = await createNewEntry()
    router.push(`/journal/${data.id}`)
  }
  return (
    <div className="cursor-pointer overflow-hidden rounded-lg bg-blue-500/20 hover:bg-blue-500/30 shadow-md">
      <div className="px-4 py-5 sm:p-6" onClick={handleOnClick}>
        <span className="text-lg font-medium">Create a new entry</span>
      </div>
    </div>
  )
}

export default NewEntryCard