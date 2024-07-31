const EntryCard = ({ entry }: { entry: any }) => {
  const date = new Date(entry.createdAt).toDateString()
  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-blue-500/20 shadow-md">
      <div className="px-4 py-5 ">{date}</div>
      <div className="px-4 py-5">summary</div>
      <div className="px-4 py-4 ">mood</div>
    </div>
  )
}

export default EntryCard
