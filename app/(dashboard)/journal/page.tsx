import EntryCard from "@/components/EntryCard"
import NewEntryButton from "@/components/NewEntryButton"
import { analyze } from "@/utils/ai"
import { getUserFromClerkId } from "@/utils/auth"
import { prisma } from "@/utils/db"
import { merriweather } from "@/utils/fonts"
import Link from "next/link"

// const getEntries = async () => {
//   const user = await getUserFromClerkId()

//   const entries = await prisma.journalEntry.findMany({
//     where: {
//       userId: user.id,
//     },
//     orderBy: {
//       createdAt: "desc",
//     },
//   })

//   return entries
// }

const JournalPage = async () => {
  // const entries = await getEntries()
  return (
    <div className="bg-[#1F1F1F] min-h-screen flex flex-col text-white">
      <div className="border-gray-700 border-b py-3 px-5">
        <h1 className="font-medium">Home</h1>
      </div>
      <div className="flex-grow flex items-center justify-center">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className={`${merriweather.className} text-4xl font-light mb-2`}>
            Get Started!
          </h2>
          <div className="max-w-lg mb-5">
            <p className="text-sm text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button className="px-5 py-4 border border-gray-100 text-black rounded-md bg-gray-100 text-sm font-medium">
              Create your own
            </button>
            <button className="px-5 py-4 border border-[#2F2F2F] text-[#FAFAFB] rounded-md bg-[#161616] text-sm font-medium">
              Create boilerplate entry
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JournalPage
