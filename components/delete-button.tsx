"use client"
import { useRouter } from "next/navigation"

const DeleteButton = ({ id }: { id: any }) => {
  const router = useRouter()
  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/journal/${id}`, {
        method: "DELETE",
      })
      if (response.ok) {
        router.push("/journal")
      } else {
        console.error("Failed to delete entry")
      }
    } catch (error) {
      console.error("Error deleting entry:", error)
    }
  }
  
  return (
    <button
      onClick={handleDelete}
      className="text-sm border border-[#cc1919] bg-[#cc1919] text-white px-3 py-2 rounded-md font-medium"
    >
      Delete
    </button>
  )
}

export default DeleteButton
