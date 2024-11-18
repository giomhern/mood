import NewJournalForm from "@/components/new-journal-form"
import { SidebarTrigger } from "@/components/ui/sidebar"

const CreateJournalEntry = () => {

  return (
    <div className="bg-[#1F1F1F] min-h-full flex flex-col text-white">
      <div className="border-gray-700 border-b py-3 px-5 h-14 flex justify-between items-center">
        <div className="flex gap-3 items-center justify-center">
          <SidebarTrigger />
          <h1 className="font-medium">Create new entry</h1>
        </div>
      </div>
      <NewJournalForm />
    </div>
  )
}

export default CreateJournalEntry
