import Editor from "@/components/Editor"
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

const EntryPage = async ({ params }: { params: any }) => {
  // Destructure id from params
  const { id } = params

  const entry = await getEntry({ id })
  const { mood, summary, color, negative, subject } = entry?.analysis

  const analysisData = [
    {
      name: "Summary",
      value: summary,
    },
    {
      name: "Mood",
      value: mood,
    },
    {
      name: "Negative",
      value: negative ? "true" : "false",
    },
    {
      name: "Subject",
      value: subject,
    },
  ]

  return (
    <div className="grid w-full h-full grid-cols-3">
      <div className="col-span-2 w-full h-[calc(100vh-70px)]">
        <Editor entry={entry} />
      </div>

      <div className={`px-5 py-10 border-l border-black/20 bg-[${color}] bg-opacity-15`}>
        <h2 className="pb-5 text-3xl font-medium lowercase">Analysis</h2>
        <div>
          <ul>
            {analysisData.map((i) => (
              <li key={i.name}>
                <div>
                  {i.name}: {i.value}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default EntryPage
