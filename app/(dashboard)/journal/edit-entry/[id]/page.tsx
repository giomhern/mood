import { SidebarTrigger } from "@/components/ui/sidebar"
import { getUserFromClerkId } from "@/utils/auth"
import { prisma } from "@/utils/db"

const getEntry = async ({ id }: { id: any }) => {
  const user = await getUserFromClerkId()

  // Ensure the id is passed correctly
  if (!id) {
    throw new Error("Entry ID is required")
  }

  // Retrieve the journal entry with user ID and entry ID
  const entry = await prisma.journalEntry.findUnique({
    where: {
      userId_id: {
        userId: user.id,
        id: id, // Ensure id is properly referenced
      },
    },
    include: {
      analysis: true,
    },
  })

  return entry
}

const EditEntry = async (props: { params: Promise<any> }) => {
  const params = await props.params
  const { id } = params
  const entry = await getEntry({ id })
  return (
    <div className="bg-[#1F1F1F] min-h-full flex flex-col text-white">
      <div className="border-gray-700 border-b py-3 px-5 h-14 flex justify-between items-center">
        <div className="flex gap-3 items-center justify-center">
          <SidebarTrigger />
          <h1 className="font-medium">Edit entry</h1>
        </div>
      </div>
      
    </div>
  )
}

export default EditEntry
