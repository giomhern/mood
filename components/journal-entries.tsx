import EntryCard from "./entry-card"

type Props = {
  entries: any
}

const JournalEntries = (props: Props) => {
  return (
    <div className="grid grid-cols-3">
      {props.entries.map((entry: any) => (
        <EntryCard entry={entry} />
      ))}
    </div>
  )
}

export default JournalEntries
