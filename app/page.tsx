import Image from "next/image"
import Link from "next/link"
import { auth } from "@clerk/nextjs/server"

export default async function Home() {
  const { userId } = await auth()
  let href = userId ? "/journal" : "/new-user"
  return (
    <div className="flex items-center justify-center w-screen h-screen text-white bg-black">
      <div className="max-w-4xl space-y-3">
        <h1 className="text-6xl font-medium">The Best Journal App, period.</h1>
        <p className="text-2xl text-white/50">
          This is the best app for tracking your mood throughout your life, all
          in one place. Zero hassle.
        </p>
        <div>
          <Link href={href}>
            <button className="px-4 py-2 text-lg bg-blue-600 rounded-lg hover:bg-blue-500">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
