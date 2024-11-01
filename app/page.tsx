import { auth } from "@clerk/nextjs/server"
import { merriweather } from "@/utils/fonts"
import AuthButton from "@/components/auth-button"
import Link from "next/link"
export default async function Home() {
  const { userId } = await auth()
  let href = userId ? "/journal" : "/new-user"
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-darkgray">
      <div className="max-w-4xl space-y-3 text-white">
        <h1
          className={`text-4xl font-medium text-center ${merriweather.className} tracking-loose pb-6`}
        >
          Sign in or create <br /> new account
        </h1>

        <div className="gap-3 px-16 grid md:px-0 md:grid-cols-3">
          <Link href={href}>
          <AuthButton provider="Google" />
          </Link>
          <AuthButton provider="Apple" />
          <AuthButton provider="Microsoft" />
        </div>

        <p className="text-lightgray px-16 text-xs md:text-sm text-center">
          By continuing, you agree to our Terms of Service, Privacy Policy and
          Data Protection Agreement
        </p>
      </div>
    </div>
  )
}
