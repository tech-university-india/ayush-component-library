import React from "react"
import PropTypes from "prop-types"

interface TextBoxProps {
  label?: string
  onChange: (event?: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  disabled?: boolean
  noBg?: boolean
  partialText?: string
  text?: string
  type?: string
  maxLength?: number
}
function TextBox ({ onChange, placeholder, disabled, noBg, partialText, text, type = "text", maxLength }: TextBoxProps) : JSX.Element | null {
  // The following are used to calculate the padding required by the text being entered
  // into the textbox in the partialText mode so that the entered text does not overlap
  // onto the partialText.
  const PAD_PARTIAL_TEXT_DOT = 0.625
  const PAD_PARTIAL_TEXT_NO_DOT = 0.68
  const PAD_PARTIAL_TEXT = `${partialText === undefined
    ? 0
    : (partialText?.length * (partialText?.startsWith(".") ? PAD_PARTIAL_TEXT_DOT : PAD_PARTIAL_TEXT_NO_DOT))}rem`

  return (
    <React.Fragment>
      {partialText !== undefined
        ? <div className="relative">
          <input type={type} disabled={disabled}
            data-testid = "partialText"
            className={`disabled:text-preFillText p-3 w-full rounded-lg ${disabled ? "shadow-textBoxInset" : "shadow-textBox"} ${noBg ? "" : "bg-textBox"} text-right`}
            style={{
              paddingRight: PAD_PARTIAL_TEXT
            }}
            onChange={(event) => {
              const eventCopy = { ...event, target: { ...event.target, value: event.target.value + partialText } }
              onChange(eventCopy)
            }}

            placeholder={placeholder}
            value={text}
          />
          <span className={"absolute block right-3 top-3 z-10 text-preFillText"}>{partialText}</span>
        </div>
        : <input type={type} disabled={disabled} className={`disabled:text-preFillText p-3 w-full rounded-lg ${disabled ? "shadow-textBoxInset" : "shadow-textBox"} ${noBg ? "" : "bg-textBox"}`}
          onChange={onChange}
          placeholder={placeholder}
          value={text}
          maxLength={maxLength}
        />}
    </React.Fragment>
  )
}

TextBox.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  noBg: PropTypes.bool,
  partialText: PropTypes.string,
  text: PropTypes.string
}

TextBox.defaultProps = {
  noBg: false,
  placeholder: ""
}

export default TextBox
