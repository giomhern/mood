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
    <div className="w-full h-full">
      {isSaving && <div>...it's saving right now</div>}
      <textarea
        className="w-full h-full p-8 text-xl outline-none"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  )
}

export default Editor
