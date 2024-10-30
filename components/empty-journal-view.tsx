import { merriweather } from "@/utils/fonts"

const EmptyJournalView = () => {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <h2 className={`${merriweather.className} text-4xl font-light mb-2`}>
        Get Started!
      </h2>
      <div className="max-w-lg mb-5">
        <p className="text-xs text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <button className="px-5 py-4 border border-gray-100 text-black rounded-md bg-gray-100 text-xs font-medium">
          Create your own
        </button>
        <button className="px-5 py-4 border border-[#2F2F2F] text-[#FAFAFB] rounded-md bg-[#161616] text-xs font-medium">
          Create boilerplate entry
        </button>
      </div>
    </div>
  )
}

export default EmptyJournalView
