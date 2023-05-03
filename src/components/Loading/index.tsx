import classNames from "classnames"
import React from "react"
import { BeatLoader } from "react-spinners"

interface LoadingProps {
  size?: number
  color?: string
}
export default function Loading ({ size = 30, color = "#B6EBB7" } : LoadingProps) : JSX.Element | null {
  return (
    <div className={classNames(
      size === 30 ? "h-screen" : "h-inherit",
      "flex justify-center items-center"
    )} >
      <BeatLoader
        color={color}
        loading={true}
        size={size}
        aria-label="Loading Spinner"
        data-testid="loader"/>
    </div>

  )
}
