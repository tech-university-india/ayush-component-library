import React from 'react'

interface AlertProps {
  input: string
  setAlert: (input?: string | null) => void
  success: boolean
}

function Alert({ input, setAlert, success }: AlertProps): JSX.Element | null {
  return (
    <div
      className={`border ${
        success
          ? 'border-green-400 text-green-700 bg-green-100'
          : 'border-red-400 text-red-700 bg-red-100 '
      }  px-4 py-3 rounded relative mt-2 mb-5`}
      role='alert'
    >
      <div className='flex gap-x-2'>
        <strong className='font-bold'>
          {success ? 'Success: ' : 'Error: '}
        </strong>
        <span className='block sm:inline'>{input}</span>
        <span className=''>
          <svg
            className={`fill-current h-6 w-6 ${
              success ? 'text-green-500' : 'text-red-500'
            } `}
            role='button'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            onClick={() => {
              setAlert(null)
            }}
          >
            <title>Close</title>
            <path d='M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z' />
          </svg>
        </span>
      </div>
    </div>
  )
}
export default Alert
