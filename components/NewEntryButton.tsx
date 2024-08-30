"use client"
import { createNewEntry } from "@/utils/api"
import { useRouter } from "next/navigation"

const NewEntryButton = () => {
  const router = useRouter()
  const handleOnClick = async () => {
    const data = await createNewEntry()
    router.push(`/journal/${data.id}`)
  }
  return (
    <button className="px-4 py-2 text-sm font-medium text-white lowercase bg-black rounded-md hover:bg-black/60" onClick={handleOnClick}>
      Create entry
    </button>
  )
}

export default NewEntryButton
