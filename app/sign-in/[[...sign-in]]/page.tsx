import { SignIn } from "@clerk/nextjs"

export default function SignInPage() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-slate-700">
      <SignIn forceRedirectUrl={process.env.NEXT_CLERK_SIGN_IN_FORCE_REDIRECT_URL} />
    </div>
  )
}
