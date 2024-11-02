"use client"
import { ChevronLeft } from "lucide-react"
import { useRouter } from "next/navigation"

const CreateJournalEntry = () => {
  const router = useRouter()

  const handleReturnClick = () => {
    return router.back()
  }
  
  return (
    <div className="bg-[#1F1F1F] min-h-full flex flex-col text-white">
      <div className="border-gray-700 border-b py-3 px-5 h-14 flex justify-between items-center">
        <div className="flex gap-3 items-center justify-center">
          <button onClick={handleReturnClick} className="p-1 rounded-md hover:bg-white hover:text-black">
            <ChevronLeft size={18} />
          </button>
          <h1 className="font-medium">Create new entry</h1>
        </div>
      </div>
    </div>
  )
}

export default CreateJournalEntry
