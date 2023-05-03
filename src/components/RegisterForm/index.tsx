
import React, { ChangeEvent } from "react"
import TextBox from "../TextBox"
// import { useRouter } from 'next/router'

interface RegistrationFormProps {
  firstName: string
  middleName: string
  lastName: string
  setFormData: (data: any) => void
  formData: any,
  setHealthId: (data : any) => void
}
function RegisterForm ({ firstName, middleName, lastName, setFormData, formData, setHealthId }: RegistrationFormProps) : JSX.Element | null {
  // const router = useRouter()
  return (
    <React.Fragment>
      <div className="mt-10">
        <TextBox placeholder="First Name" disabled={true} text={firstName}
          onChange={() => {
            // do nothing
          }}
        />
      </div>
      <div className="mt-3">
        <TextBox placeholder="Middle Name" disabled={true} text={middleName} 
          onChange={() => {
            // do nothing
          }}
        />
      </div>
      <div className="mt-3">
        <TextBox placeholder="Last Name" disabled={true} text={lastName} onChange={() => {
          // do nothing
        }}/>
      </div>
      <div className="mt-10">
        <TextBox placeholder="Email ID" onChange={(e:ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, email: e.target.value })}/>
      </div>
      <div className="mt-3">
        <TextBox placeholder="Password" type="password" onChange={(e:ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, password: e.target.value })}/>
      </div>
      <div className="mt-3">
        <TextBox placeholder="Health ID" partialText=".ayush@sbx" onChange={(e:ChangeEvent<HTMLInputElement>) => setHealthId(e.target.value)} />

      </div>
    </React.Fragment>
  )
}

export default RegisterForm
