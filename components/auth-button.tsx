import { FaApple, FaGoogle, FaMicrosoft } from "react-icons/fa"
type AuthButtonProps = {
  provider: String
}

const AuthButton = (props: AuthButtonProps) => {
  return (
    <div className="w-full border-[#2F2F2F] border bg-darkgray text-white p-5 rounded-lg flex items-center justify-center content-center gap-3">
      {props.provider === "Apple" ? (
        <FaApple size={18} />
      ) : props.provider === "Microsoft" ? (
        <FaMicrosoft color="#04A5F0" size={18} />
      ) : (
        <FaGoogle color="#33A852" size={18} />
      )}
      <p className="text-xs font-medium">Continue with {props.provider}</p>
    </div>
  )
}

export default AuthButton
