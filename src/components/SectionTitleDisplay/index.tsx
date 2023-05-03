import React from "react"
import PropTypes from "prop-types"

import collapsibleLeft from "../../../public/collapsibleLeft.svg"
import collapsibleDown from "../../../public/collapsibleDown.svg"

/**
 * An expandable section title display. Can also be used without the expandability.
 * Pass the `expanded` prop as well when the `onExpandClick` prop is passed.
 * If the `expanded` prop is not passed, the collapsible arrow is not rendered.
 */

interface SectionTitleDisplayProps {
  text: string
  expanded?: boolean
  onExpandClick?: () => void
}
export default function SectionTitleDisplay ({ text, onExpandClick, expanded }: SectionTitleDisplayProps): JSX.Element | null {
  return <div className="p-3 flex flex-row bg-options justify-between items-center border border-gray-100">
    <span className="drop-shadow-none text-2xl font-light">{text}</span>
    <div className="flex flex-row justify-end items-center">
      {expanded !== undefined &&
        <button className="pl-2 bg-transparent" id="collapseBtn" onClick={() => onExpandClick && onExpandClick()}>
          <img src={expanded ? collapsibleLeft : collapsibleDown} alt={expanded ? "Collapse" : "Expand"} />
        </button>
      }
    </div>
  </div>
}

SectionTitleDisplay.propTypes = {
  text: PropTypes.string.isRequired,
  expanded: PropTypes.bool,
  onExpandClick: PropTypes.func
}
