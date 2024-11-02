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
  } = useForm<JournalEntryData>()

  const onSubmit = async (data: FormData) => {
    console.log("SUCCESS", data)
  }
  return <div>NewJournalForm</div>
}

export default NewJournalForm
