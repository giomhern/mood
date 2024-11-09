import React from 'react'
import { SidebarTrigger } from '@/components/ui/sidebar'
type Props = {}

const AllEntries = (props: Props) => {
  return (<div className="bg-[#1F1F1F] min-h-full flex flex-col text-white">
    <div className="border-gray-700 border-b py-3 px-5 h-14 flex justify-between items-center">
      <div className="flex gap-3 items-center justify-center">
        <SidebarTrigger />
        <h1 className="font-medium">All Entries</h1>
      </div>
    </div>
  </div>
  )
}

export default AllEntries