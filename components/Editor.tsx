"use client"

import { updateEntry } from "@/utils/api"
import { useState } from "react"
import { useAutosave } from "react-autosave"

const Editor = ({ entry }: { entry: any }) => {
  const [text, setText] = useState(entry.content)
  const [isSaving, setIsSaving] = useState(false)
  useAutosave({
    data: text,
    onSave: async (_text) => {
      setIsSaving(true)
      const updated = await updateEntry(entry.id, _text)
      setIsSaving(false)
    },
  })
  return (
    <div className="w-full h-full p-10">
      <h3 className="pb-5 text-3xl font-semibold">your entry</h3>
      <textarea
        className="w-full p-5 border rounded-md outline-none border-black/20 h-1/2 font-regular text-md"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {isSaving && <div>...it's saving right now</div>}
    </div>
  )
}

export default Editor
