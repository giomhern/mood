import { FieldError, UseFormRegister } from "react-hook-form"
import { z, ZodType } from "zod"

export type JournalEntryData = {
  title: String
  content: String
  comments?: String
}

export type JournalEntryFormProps = {
  type: string
  placeholder: string
  name: ValidFieldNames
  register: UseFormRegister<JournalEntryData>
  error: FieldError | any
  valueAsNumber?: boolean
}

export type ValidFieldNames = "title" | "content" | "comments"

export const JournalSchema: ZodType<JournalEntryData> = z.object({
  title: z.string().min(1, { message: "Title cannot be empty :'(" }),
  content: z.string().min(1, { message: "Content cannot be empty :'(" }),
  comments: z.string().min(1, { message: "Comments cannot be empty :'(" }),
})
