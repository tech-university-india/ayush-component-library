import React from 'react'
import PropTypes from 'prop-types'

import editSvg from '../../../public/edit.svg'

/**
 * Key-value display component.
 * Pass an onEditClick callback function as props to render the edit button.
 * If the onEditClick callback function is not passed as props, the edit button is not rendered.
 */

interface KeyValueDisplayProps {
  keyText: string
  valueText: string
  onEditClick?: () => void
}
export default function KeyValueDisplay({
  keyText,
  valueText,
  onEditClick
}: KeyValueDisplayProps): JSX.Element | null {
  return (
    <div className='p-4 w-full flex flex-row border-opacity-5 justify-between items-center border border-gray-100 bg-white drop-shadow-keyValueDisplay'>
      <span className='drop-shadow-none'>{keyText}</span>
      <div className='flex flex-row justify-end items-center w-1/3'>
        <span className='drop-shadow-none lg:break-all'>{valueText}</span>
        {onEditClick && (
          <button
            className='min-w-fit pl-2 bg-transparent'
            onClick={onEditClick}
          >
            <img src={editSvg} alt='Edit' />
          </button>
        )}
      </div>
    </div>
  )
}

KeyValueDisplay.propTypes = {
  keyText: PropTypes.string.isRequired,
  valueText: PropTypes.string.isRequired,
  onEditClick: PropTypes.func
}
