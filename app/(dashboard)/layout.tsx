import { UserButton } from "@clerk/nextjs"
import Link from "next/link"
const DashboardLayout = ({ children }: { children: any }) => {
  return (
    <div className="relative w-screen h-screen">
      <aside className="absolute text-center font-semibold text-3xl py-10 h-full border-r border-black/20 w-[200px]">
        <Link href='/journal'>mood</Link>
      </aside>

      <div className="ml-[200px]">
        <header className="h-[60px] border-b border-black/20">
          <div className="flex items-center justify-end w-full h-full px-6">
            <UserButton />
          </div>
        </header>
        <div>{children}</div>
      </div>
    </div>
  )
}

export default DashboardLayout
