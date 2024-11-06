"use client"
import { useForm } from "react-hook-form"
import { JournalEntryData, JournalSchema } from "@/utils/types"
import FormField from "./form-field"
import { createNewCustomEntry } from "@/utils/api"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"

const NewJournalForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<JournalEntryData>({
    resolver: zodResolver(JournalSchema),
  })

  const router = useRouter()

  const onSubmit = async (data: JournalEntryData) => {
    try {
      const newEntry = await createNewCustomEntry(data)
      console.log("SUCCESS", newEntry)
      router.push(`/journal/${newEntry.id}`)
      reset()
    } catch (error) {
      console.error("Error creating new entry:", error)
    }
  }
  return (
    <div className="p-5 md:p-10 flex flex-grow items-center justify-center w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full lg:w-2/3">
        <h1 className="font-medium capitalize text-left text-lg md:text-2xl pb-5">
          Create your new journal entry
        </h1>

        <div className="flex flex-col gap-3">
          <FormField
            type="text"
            placeholder="Give your journal entry some personality"
            name="title"
            register={register}
            error={errors.title}
          />
          <FormField
            type="text"
            placeholder="Express yourself"
            name="content"
            register={register}
            error={errors.content}
          />
          <FormField
            type="text"
            placeholder="Anything to let yourself know"
            name="comments"
            register={register}
            error={errors.comments}
          />

          <button
            type="submit"
            className="bg-white py-3 text-black rounded-lg font-medium"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default NewJournalForm
