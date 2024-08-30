const EntryCard = ({ entry }: { entry: any }) => {
  const date = new Date(entry.createdAt).toDateString()
  return (
    <div className="p-5 text-white bg-black rounded-md shadow-md hover:bg-black/80">
      <div className="text-sm text-gray-300 lowercase" >{date}</div>
      <div className="">summary</div>
      <div className="">mood</div>
    </div>
  )
}

export default EntryCard
