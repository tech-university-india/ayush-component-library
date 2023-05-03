import React, { ChangeEvent } from "react"
import TextBox from "../TextBox"

interface OTPRegistrationHeaderProps {
  setFormData: (formDatay: any) => void
  disabled: boolean
  formData: any
}

function OTPRegistrationHeader ({ setFormData, disabled, formData }: OTPRegistrationHeaderProps) {
  return (
    <React.Fragment>
      <TextBox placeholder="Aadhaar Number" disabled={true} text={formData.aadhaarNumber} onChange={() => {
        // do nothing
      }}/>
      <p className="m-6 text-center">
        Please enter mobile number you want to use with ABHA
      </p>
      <TextBox placeholder="Mobile Number" text={formData.mobileNumber} onChange={(e:ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, mobileNumber: e.target.value })} disabled={disabled}/>
    </React.Fragment>
  )
}

export default OTPRegistrationHeader
