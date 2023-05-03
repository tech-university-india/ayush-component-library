import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import CustomButton from "../CustomButton"
import React, { useEffect } from "react"
import { faRedo } from "@fortawesome/free-solid-svg-icons"

interface ResendOTPButtonProps {
  onclick: (restartTimer: () => void) => void
  timerLength: number
  enabled?: boolean
}

export default function ResendOTPButton ({
  onclick,
  timerLength,
  enabled = false
}: ResendOTPButtonProps) : JSX.Element | null {
  const restartTimer = () => {
    setTimerEnabled(true)
    setSeconds(timerLength)
  }

  const [timerEnabled, setTimerEnabled] = React.useState(enabled)
  const [seconds, setSeconds] = React.useState(timerLength)
  useEffect(() => {
    if (timerEnabled) {
      const interval = setInterval(() => {
        setSeconds((t) => (t >= 1 ? t - 1 : 0))
      }, 1000)

      const timer = 
      setTimeout(() => {
        setTimerEnabled(false)
        interval && clearInterval(interval)
      }, timerLength * 1000)
      return () =>{ clearTimeout(timer)
        clearInterval(interval)
      }
    }
    return () => {
      // Return undefined or null here
      return undefined;
    }
  }, [timerEnabled])

  if (timerEnabled) {
    return (
      <p data-testid="resend-countdown">
        You can resend OTP after{" "}
        <strong className="text-green-500">{seconds}</strong> second(s)
      </p>
    )
  }

  return (

    <CustomButton
      onClick={timerEnabled ? null : (e: React.MouseEvent<HTMLButtonElement>) => onclick(restartTimer)}
      className="p-3 w-fit"
    >
      <div className="flex items-center gap-x-2">
      Re-Send
        <p className="flex">

          <i>
            <FontAwesomeIcon
              size="1x"
              icon={faRedo}
              className="text-secondary"
            />
          </i>
        </p>
      </div>
    </CustomButton>
  )
}
