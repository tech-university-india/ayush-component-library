import React, { useState } from 'react'
import classNames from 'classnames'

interface DropdownProps {
  children: React.ReactNode
  headerComponent: (props: {
    toggleDropdown: () => void
    isOpen: boolean
  }) => React.ReactNode
  className?: string
}
function Dropdown({
  children,
  headerComponent,
  className = ''
}: DropdownProps): JSX.Element | null {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div
      className={classNames(
        className,
        'flex flex-col items-center w-full justify-center mb-4'
      )}
    >
      <div onClick={toggleDropdown} className='w-full'>
        {headerComponent({ toggleDropdown, isOpen })}
      </div>

      {isOpen && (
        <div className='bg-white w-full mb-4 mt-2' role='menu'>
          {React.Children.map(children, (child, index) => (
            <div
              key={index}
              className='dropdown-item flex justify-between py-1'
            >
              {child}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Dropdown
