import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import Loading from "../Loading"

interface CustomButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void | null
  testId?: string
  children: React.ReactNode
  className?: string
  isSelected?: boolean
}

export default function CustomButton ({
  onClick,
  testId,
  children,
  className = "bg-purple-500 text-white",
  isSelected = false
}: CustomButtonProps) : JSX.Element | null {
  const [loading, setLoading] = React.useState(false)
  async function handleOnClick (e : any) : Promise<void>{
    setLoading(true)
    onClick && (await onClick(e))
    setLoading(false)
  }
  return (
    <button
      data-testid={testId}
      onClick={handleOnClick}
      disabled={loading}
      className={classNames(
        className,
        isSelected ? "shadow-selected" : "shadow-xl text-primaryButtonText",
        "px-5 py-3 text-base font-light rounded-sm"
      )}
    >
      {loading ? <Loading size={14} /> : children}
    </button>
  )
}

CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func
}
