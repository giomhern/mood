"use client"
import { useForm } from "react-hook-form"
import { JournalEntryData } from "@/utils/types"
import FormField from "./form-field"

const NewJournalForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset
  } = useForm<JournalEntryData>()

  const onSubmit = async (data: JournalEntryData) => {
    console.log("SUCCESS", data)
    reset()
  }
  return (
    <div className="max-w-8xl text-left p-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="font-medium capitalize text-left text-2xl pb-5">
          Create your new journal entry
        </h1>

        <div className="flex flex-col gap-3">
          <FormField
            type="text"
            placeholder="Give your journal entry some personality"
            name="title"
            register={register}
            // error={errors.title}
          />
          <FormField
            type="text"
            placeholder="Express yourself"
            name="content"
            register={register}
            // error={errors.title}
          />
          <FormField
            type="text"
            placeholder="Anything to let yourself know"
            name="comments"
            register={register}
            // error={errors.title}
          />

          <button type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default NewJournalForm
