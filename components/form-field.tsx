import { JournalEntryFormProps } from "@/utils/types"

const FormField: React.FC<JournalEntryFormProps> = ({
  type,
  placeholder,
  name,
  register,
  //   error,
  valueAsNumber,
}) => (
  <>
    {placeholder === "Express yourself" ? (
      <textarea
        placeholder={placeholder}
        {...register(name, { valueAsNumber })}
        className="px-5 py-3 text-sm md:w-1/3 h-44 resize-none bg-[#1F1F1F] border border-[#2F2F2F] rounded-md focus:outline-none"
      />
    ) : (
      <input
        type={type}
        placeholder={placeholder}
        {...register(name, { valueAsNumber })}
        className="px-5 py-3 text-sm md:w-1/3 bg-[#1F1F1F] border border-[#2F2F2F] rounded-md focus:outline-none"
      />
    )}
    {/* {error && <span className="error-message">{error.message}</span>} */}
  </>
)
export default FormField
