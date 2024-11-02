import { FieldError, UseFormRegister } from "react-hook-form"

export type JournalEntryData = {
    title: String;
    content: String;
    comments?: String;
}

export type JournalEntryFormProps = {
    type: string;
    placeholder: string;
    name: ValidFieldNames;
    register: UseFormRegister<JournalEntryData>;
    error: FieldError | undefined;
    valueAsNumber?: boolean;
}


export type ValidFieldNames = "title" | "content" | "comments"