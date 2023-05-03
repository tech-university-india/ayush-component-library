import React from "react"
import { render, fireEvent, screen } from "@testing-library/react"
import OTPInput from "../index"

describe("Otp", () => {
  it("should render six input fields", () => {
    render(<OTPInput />)
    const inputs = screen.getAllByRole("textbox")
    expect(inputs.length).toBe(6)
  })

  it("should move focus to the next input field when a digit is entered", () => {
    render(<OTPInput onChange={jest.fn()} />)
    const input0 = screen.getByTestId("OTP digit 0")
    const input1 = screen.getByTestId("OTP digit 1")

    fireEvent.keyDown(input0, { key: "1" })
    expect(input0).not.toHaveFocus()
    expect(input1).toHaveFocus()
  })

  it("should move focus to the previous input field when the backspace key is pressed", () => {
    render(<OTPInput onChange={jest.fn()} />)
    const input0 = screen.getByTestId("OTP digit 0")
    const input1 = screen.getByTestId("OTP digit 1")

    fireEvent.keyDown(input1, { key: "1" })
    fireEvent.keyDown(input1, { key: "Backspace" })
    expect(input1).not.toHaveFocus()
    expect(input0).toHaveFocus()
  })

  it("should not allow non-numeric characters to be entered", () => {
    render(<OTPInput onChange={jest.fn()} />)
    const input0 = screen.getByTestId("OTP digit 0")

    fireEvent.keyDown(input0, { key: "a" })
    expect(input0.value).toBe("-")
  })

  // xit('prevents disallowed keys from being entered and updates activeOtpIndex when backspace is pressed', () => {
  //   // render(<Otp />)
  //   // const preventDefault = jest.fn()
  //   render(<OTPInput onChange={jest.fn()} />)
  //   const input0 = screen.getByTestId('OTP digit 0')

  //   fireEvent.keyDown(input0, { key: 'a' })

  //   // fireEvent.keyDown(input0, { key: 'Backspace' })
  //   const updatedInput = screen.getByTestId('OTP digit 0')
  //   expect(updatedInput).toHaveFocus()
  // })
})
