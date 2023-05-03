import React from "react"
import { render, screen } from "@testing-library/react"
import OTPRegistrationHeader from "../index.tsx"

const formData = {
  aadhaarNumber: "1234567890",
}

const setFormData = jest.fn()

describe("OTPRegistrationHeader", () => {
  it("should render correctly", () => {
    const { asFragment } = render(<OTPRegistrationHeader formData={formData} setFormData={setFormData}/>)
    expect(asFragment()).toMatchSnapshot()
  })

  it("should render the correct text", () => {
    render(<OTPRegistrationHeader formData={formData} setFormData={setFormData}/>)
    expect(
      screen.getByText("Please enter mobile number you want to use with ABHA")
    ).toBeInTheDocument()
  })
})
