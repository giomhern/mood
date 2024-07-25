import { SignUp } from "@clerk/nextjs"

const SignUpPage = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-slate-700">
      <SignUp forceRedirectUrl={process.env.NEXT_CLERK_SIGN_UP_FORCE_REDIRECT_URL} />
    </div>
  )
}

export default SignUpPage
