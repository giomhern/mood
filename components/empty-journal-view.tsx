import { merriweather } from "@/utils/fonts"
import Link from "next/link"
const EmptyJournalView = () => {
  return (
    <div className="text-center px-5 md:max-w-3xl md:px-0 md:mx-auto">
      <h2
        className={`${merriweather.className} text-2xl font-light mb-2 md:text-4xl`}
      >
        Get Started!
      </h2>
      <div className="mb-5 md:max-w-lg">
        <p className="text-xs md:text-sm text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <Link
          href={"/journal/create-entry"}
          className="px-5 py-4 border border-gray-100 text-black rounded-md bg-gray-100 font-medium text-xs md:text-sm"
        >
          Create your own
        </Link>
        <button className="px-5 py-4 border border-[#2F2F2F] text-[#FAFAFB] rounded-md bg-[#161616] font-medium text-xs md:text-sm">
          Create boilerplate
        </button>
      </div>
    </div>
  )
}

export default EmptyJournalView
