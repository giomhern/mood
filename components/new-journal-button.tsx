"use client"
import { createNewEntry } from "@/utils/api"
import { useRouter } from "next/navigation"

const NewEntryButton = () => {
  const router = useRouter()
  const handleOnClick = async () => {
    try {
      router.push(`/journal/create-entry`)
    } catch (e) {
      console.error("Failed to create a new entry...", e)
    }
  }
  return (
    <button
      className="px-4 py-2 text-xs font-medium text-black bg-white rounded-[7px] hover:bg-hover"
      onClick={handleOnClick}
    >
      Create your own
    </button>
  )
}

export default NewEntryButton
