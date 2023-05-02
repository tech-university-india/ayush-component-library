import classNames from "classnames"
import React, { useState } from "react"

interface OTPInputProps {
  className?: string
  parentClassName?: string
  onChange?: (otp: string) => void  
}
function OTPInput ({ className = "", onChange, parentClassName }: OTPInputProps) : JSX.Element | null {
  const [otp, setOtp] = useState("")

  const handleKeyDown = (e : any) : void => {
    const target = e.target
    if (e.key !== "Backspace" && !isNaN(parseInt(e.key)) && otp.length !== 6) {
      const nextElementSibling = target.nextElementSibling
      if (nextElementSibling) {
        nextElementSibling.focus()
      }
      onChange && onChange(otp + e.key)
      setOtp(otp + e.key)
    } else if (e.key === "Backspace" && otp.length !== 0) {
      const previousElementSibling = target.previousElementSibling
      if (previousElementSibling) {
        previousElementSibling.focus()
      }
      onChange && onChange(otp.slice(0, -1))
      setOtp(otp.slice(0, -1))
    }
  }

  return (
    <div
      className={classNames(
        parentClassName,
        "flex w-full justify-center items-center gap-x-[4px]  h-[38px]"
      )}
    >
      {[0, 1, 2, 3, 4, 5].map((digit, idx) => (
        <input
          data-testid={`OTP digit ${idx}`}
          key={digit}
          type="text"
          onKeyDown={(e) => handleKeyDown(e)}
          inputMode="numeric"
          autoComplete="one-time-code"
          maxLength={1}
          placeholder="-"
          // onChange={() => {}}
          value={otp[idx] ?? "-"}
          className={classNames(
            className,
            "max-w-[2rem] w-[80%] h-full drop-shadow-xl rounded p-1 outline-none text-center font-semibold text-xl spin-button-none focus:border-outline border-2 text-gray-600 transition"
          )}
        />
      ))}
    </div>
  )
}

export default OTPInput
