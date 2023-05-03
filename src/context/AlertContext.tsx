
import { createContext } from "react"
import Alert from "../components/Alert"
import React from "react"

const AlertContext = createContext({})

interface AlertStateProps {
  children: React.ReactNode
}

const AlertState = ({ children }: AlertStateProps) => {
  const [alertInfo, setAlertInfo] = React.useState(null)
  const showAlert = (message: any, success = false, timeout = 5000) => {
    setAlertInfo({ message, success })
    setTimeout(() => {
      setAlertInfo(null)
    }, timeout)
  }

  return (
    <AlertContext.Provider value={{ showAlert }}>
      <>
        <div className="absolute z-20 bottom-0 mx-10 left-0">
          {alertInfo && (
            <Alert
              input={" " + alertInfo.message}
              setAlert={setAlertInfo}
              success={alertInfo.success}
            />
          )}
        </div>

        {children}
      </>

    </AlertContext.Provider>
  )
}

const useAlert = () => {
  return React.useContext(AlertContext) as any
}
export { useAlert, AlertState, AlertContext }
