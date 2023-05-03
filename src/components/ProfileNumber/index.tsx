import {
  VERIFICATION_TYPE,
  NUMBER_EDIT_PROCESS_STATUS
} from "../../common/constants"
import React, { ChangeEvent, useEffect } from "react"
import CustomButton from "../CustomButton"
import OTPInput from "../OTPInput"
import KeyValueDisplay from "../KeyValueDisplay"
import TextBox from "../TextBox"
import UpdateButtons from "../UpdateButtons"
import * as handler from "./requestHandler"

import PropTypes from "prop-types"
import screenText from "../../../screenText"
import { useAlert } from "../../context/AlertContext"

interface ProfileNumberProps {
  phone: string
}

interface SubmitButtonProps {
  onClick: () => Promise<void>
  testId?: string
}
export default function ProfileNumber ({ phone }: ProfileNumberProps) : JSX.Element | null {
  const { showAlert } = useAlert()
  const [numberInput, setNumberInput] = React.useState("")
  const txnId = React.useRef(null)

  const [phoneNumber, setPhoneNumber] = React.useState(phone)
  const newNumber = React.useRef<string | null>(null)
  const [numberEditProcessStatus, setNumberEditProcessStatus] = React.useState(
    NUMBER_EDIT_PROCESS_STATUS.IDLE
  )
  const [oldVerificationType, setOldVerificationType] = React.useState("0")

  useEffect(() => {
    setPhoneNumber(phone)
  }, [])

  const onEditButtonClick = () => {
    setNumberEditProcessStatus(
      numberEditProcessStatus === NUMBER_EDIT_PROCESS_STATUS.IDLE
        ? NUMBER_EDIT_PROCESS_STATUS.INITIATED
        : NUMBER_EDIT_PROCESS_STATUS.IDLE
    )
  }

  const onNewNumberSubmitClick = async () => {
    try {
      if (numberInput.length !== 10) {
        showAlert("Invalid number")
        return
      }
      const res = await handler.handleRequestForNewNumberSubmit(numberInput)
      txnId.current = res.data.txnId
      newNumber.current = numberInput || null
      setNumberEditProcessStatus(NUMBER_EDIT_PROCESS_STATUS.NEW_NUMBER_SENT)
      setNumberInput("")
    } catch (error) {
      showAlert(error.message)
    }
  }
  async function onOldVerificationMethodClick(info : any) : Promise<void>{
    const type = info.toUpperCase()
    if (type === VERIFICATION_TYPE.PASSWORD) {
      setOldVerificationType(type)
      setNumberEditProcessStatus(NUMBER_EDIT_PROCESS_STATUS.OLD_NUMBER_SENT)
      return
    }
    try {
      await handler.handleRequestForOldNumberVerification(txnId.current, type)
      setOldVerificationType(type)
      setNumberEditProcessStatus(NUMBER_EDIT_PROCESS_STATUS.OLD_NUMBER_SENT)
    } catch (error) {
      showAlert(error.message)
    }
  }

  const onNewNumberOtpSubmitClick = async () => {
    try {
      if (numberInput.length !== 6) throw new Error("Invalid OTP")

      await handler.handleRequestForNewNumberOtpSubmit(txnId.current, numberInput)
      setNumberEditProcessStatus(
        NUMBER_EDIT_PROCESS_STATUS.NEW_NUMBER_VERIFIED
      )
      setNumberInput("")
    } catch (error) {
      showAlert(error.message)
    }
  }

  const handleOldNumberVerifySubmitClick = async () => {
    try {
      await handler.handleRequestForOldNumberVerifySubmitClick(
        numberInput,
        oldVerificationType,
        txnId.current
      )
      setNumberEditProcessStatus(NUMBER_EDIT_PROCESS_STATUS.IDLE)
      setPhoneNumber(newNumber.current || "")
    } catch (error) {
      showAlert(error.message)
    }
  }

  const SubmitButton = ({ onClick, testId }: SubmitButtonProps) => {
    return (
      <CustomButton
        testId={testId}
        className="bg-submit h-10 rounded-sm flex items-center"
        onClick={onClick}
      > 
        Submit
      </CustomButton>
    )
  }

  return (
    <div>
      <KeyValueDisplay
        keyText={screenText.loginScreen.phoneNumber.title}
        valueText={phoneNumber ?? "LOADING"}
        onEditClick={onEditButtonClick}
      />
      {numberEditProcessStatus !== NUMBER_EDIT_PROCESS_STATUS.IDLE && (
        <div data-testid="number-main-div" className="flex flex-col px-3 py-4 gap-y-6 bg-textBox">
          <div className="flex gap-x-6 items-center">
            <TextBox
              noBg
              onChange={(e:ChangeEvent<HTMLInputElement>) => {
                  setNumberInput(e.target.value)

              }}
              placeholder={screenText.loginScreen.phoneNumber.newPhoneInputPlaceHolder}
              disabled={
                numberEditProcessStatus !== NUMBER_EDIT_PROCESS_STATUS.INITIATED
              }
            />
            {numberEditProcessStatus ===
              NUMBER_EDIT_PROCESS_STATUS.INITIATED && (
              <SubmitButton testId="new-number-submit" onClick={onNewNumberSubmitClick} />
            )}
          </div>
          {numberEditProcessStatus ===
            NUMBER_EDIT_PROCESS_STATUS.NEW_NUMBER_SENT && (
            <span data-testid="new-otp-sent" className="flex items-center justify-between gap-x-3">
              <OTPInput
                onChange={(value) => {
                  setNumberInput(value)
                }}
              />
              <SubmitButton testId="new-otp-submit" onClick={onNewNumberOtpSubmitClick} />
            </span>
          )}
          {numberEditProcessStatus ===
            NUMBER_EDIT_PROCESS_STATUS.NEW_NUMBER_VERIFIED && (
            <UpdateButtons onClick={onOldVerificationMethodClick} />
          )}
          {numberEditProcessStatus ===
            NUMBER_EDIT_PROCESS_STATUS.OLD_NUMBER_SENT && (
            <div className="flex gap-x-3 items-center justify-between">
              {VERIFICATION_TYPE.PASSWORD === oldVerificationType && (
                <TextBox
                  placeholder="Enter your password"
                  onChange={(e:ChangeEvent<HTMLInputElement>) => {
                    setNumberInput(e.target.value || "")
                  }}
                  type="password"
                />
              )}
              {[VERIFICATION_TYPE.AADHAAR, VERIFICATION_TYPE.MOBILE].includes(
                oldVerificationType
              ) && (
                <OTPInput
                  onChange={(value) => setNumberInput(value)}
                />
              )}
              <SubmitButton onClick={handleOldNumberVerifySubmitClick} />
            </div>
          )}
        </div>
      )}
    </div>
  )
}

ProfileNumber.propTypes = {
  phone: PropTypes.string.isRequired
}
