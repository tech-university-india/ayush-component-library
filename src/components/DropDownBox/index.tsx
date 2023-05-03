import React from "react"
import PropTypes from "prop-types"

interface DropDownBoxProps {
  placeholder: string
  items: string[]
  onSelect: (value: string) => void
  disabled?: boolean
  noBg?: boolean
}
export default function DropDownBox ({ placeholder, items = [], onSelect, disabled, noBg } : DropDownBoxProps) : JSX.Element | null {
  return (
    <select
      data-testid="dropdown"
      className={`disabled:text-preFillText p-3 w-full rounded-lg ${
        disabled ? "shadow-textBoxInset" : "shadow-textBox"
      } ${noBg ? "" : "bg-textBox"}`}
      onChange={(e) => {
        onSelect(e.target.value)
      }}
    >
      <option
        key={-1}
        value={""}
      >
        {placeholder}
      </option>

      { items.map((item, index) => (
        <option
          key={index}
          value={item}
        >
          {item}
        </option>
      ))}
    </select>
  )
}

DropDownBox.propTypes = {
  items: PropTypes.array,
  onSelect: PropTypes.func.isRequired
}
