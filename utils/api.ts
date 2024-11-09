import { JournalEntryData } from "./types"
import { prisma } from "./db"
import { string } from "zod"

const createUrl = (path: string) => {
  return window.location.origin + path
}

export const updateEntry = async (id: any, content: any) => {
  const res = await fetch(
    new Request(createUrl(`/api/journal/${id}`), {
      method: "PATCH",
      body: JSON.stringify({
        content,
      }),
    })
  )

  if (res.ok) {
    const data = await res.json()
    return data.data
  }
}

export const createNewDefaultEntry = async () => {
  const res = await fetch(
    new Request(createUrl("/api/journal"), {
      method: "POST",
    })
  )

  if (res.ok) {
    const data = await res.json()
    return data.data
  }
}

export const createNewCustomEntry = async (content: JournalEntryData) => {
  const res = await fetch(
    new Request(createUrl("/api/journal"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(content),
    })
  )

  if (res.ok) {
    const data = await res.json()
    return data.data
  } else {
    throw new Error("Failed to create new entry")
  }
}
