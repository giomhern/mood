import { merriweather } from "@/utils/fonts"
import Link from "next/link"
const EntryCard = ({ entry }: { entry: any }) => {
  const date = new Date(entry.createdAt).toDateString()
  return (
    <Link href={`/journal/${entry.id}`}>
    <div className="p-5 rounded-md bg-[#1F1F1F] h-full border border-[#2F2F2F] justify-between">
      <div className={`${merriweather.className} mb-2`}>{entry.title}</div>
      <p className="text-sm text-gray-300 line-clamp-3 mb-5">{entry.content}</p>
      <p className="text-xs text-gray-300">{entry.comments}</p>
      <p className="text-xs text-gray-300">{date}</p>
    </div>
    </Link>
  )
}

export default EntryCard
