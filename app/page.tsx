import Image from "next/image"
import Link from "next/link"
import { auth } from "@clerk/nextjs/server"

export default async function Home() {
  const { userId } = await auth()
  let href = userId ? "/journal" : "/new-user"
  return (
    <div className="w-screen h-screen bg-slate-700 flex justify-center items-center text-white">
      <div className="space-y-3 max-w-4xl">
        <h1 className="text-6xl font-medium">The Best Journal App, period.</h1>
        <p className="text-2xl text-white/50">
          This is the best app for tracking your mood throughout your life, all
          in one place. Zero hassle.
        </p>
        <div>
          <Link href={href}>
            <button className="bg-blue-600 px-4 py-2 rounded-lg text-lg hover:bg-blue-500">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
