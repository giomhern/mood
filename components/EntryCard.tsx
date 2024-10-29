const EntryCard = ({ entry }: { entry: any }) => {
  const date = new Date(entry.createdAt).toDateString()
  return (
    <div className="p-5 bg-black rounded-lg shadow-md border hover:bg-darkgray/80">
      <div className="text-sm text-gray-300 lowercase" >{date}</div>
      <div className="">summary</div>
      <div className="">mood</div>
    </div>
  )
}

export default EntryCard
