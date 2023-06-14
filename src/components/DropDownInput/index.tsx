import classNames from 'classnames'
import * as React from 'react'

interface DropDownInputProps {
  onChange?: (
    event?: React.ChangeEvent<HTMLSelectElement>,
    setValue?: (value: string) => void
  ) => void
  initialOption: string
  options?: string[]
  noBg?: boolean
  className?: string,
  testId?: string
}
export default function DropDownInput({
  onChange,
  initialOption,
  options,
  noBg = false,
  className = '',
  testId
}: DropDownInputProps) {
  const [value, setValue] = React.useState(initialOption)

  return (
    <div className="relative">
      <select
        data-testid={testId}
        value={value}
        className={classNames(
          className,
          noBg ? '' : 'bg-[#F2FEFF]',
          'block appearance-none w-full p-3 rounded-lg hover:border-gray-500 px-4 pr-8 shadow-textBox leading-tight focus:outline-none '
        )}
        onChange={(e) => {
          setValue(e.target.value)
          onChange && onChange(e, setValue)
        }}
      >
        <option hidden>{initialOption}</option>
        {options?.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
          <path d="M10 12l-6-6h12l-6 6z" />
        </svg>
      </div>
    </div>
  )
}
