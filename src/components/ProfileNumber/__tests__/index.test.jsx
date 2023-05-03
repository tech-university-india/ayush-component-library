import React from "react"
import ProfileNumber from "../index.tsx"
import { AlertContext } from "@/context/AlertContext"
import { render, fireEvent, screen, waitFor } from "@testing-library/react"

jest.mock("../requestHandler", () => ({
  handleRequestForNewNumberSubmit: jest.fn().mockResolvedValue({
    data: {
      txnId: "123"
    }
  }),
  handleRequestForNewNumberOtpSubmit: jest.fn().mockResolvedValue(),
  handleRequestForOldNumberVerification: jest.fn().mockResolvedValue(),
  handleRequestForOldNumberVerifySubmitClick: jest.fn().mockResolvedValue()
}))

const getPhoneComponent = () => {
  return <AlertContext.Provider value={{ showAlert: jest.fn() }}><ProfileNumber phone="911" /></AlertContext.Provider>
}

describe("Tests for ProfileNumber component", () => {
  it("should render the component", () => {
    const { getByText } = render(getPhoneComponent())
    expect(getByText("911")).toBeTruthy()
  })
  it("should open the update kit when the edit button is clicked", () => {
    const { getByAltText } = render(getPhoneComponent())
    const editButton = getByAltText("Edit")
    fireEvent.click(editButton)
    expect(screen.getByTestId("number-main-div")).toBeTruthy()
  })
  it("should return and do nothing when submit button with new number is clicked and the input is less than 10", () => {
    const { getByAltText } = render(getPhoneComponent())
    const editButton = getByAltText("Edit")
    fireEvent.click(editButton)
    const submitButton = screen.getByTestId("new-number-submit")
    fireEvent.click(submitButton)
    expect(screen.getByTestId("new-number-submit")).toBeTruthy()
  })

  it("should send an otp when the submit button with new number is clicked", () => {
    const { getByAltText } = render(getPhoneComponent())
    const editButton = getByAltText("Edit")
    fireEvent.click(editButton)
    fireEvent.change(screen.getByPlaceholderText("New Number"), {
      target: { value: "1234567890" }
    })

    const submitButton = screen.getByTestId("new-number-submit")
    fireEvent.click(submitButton)

    waitFor(() => {
      expect(screen.getByTestId("new-otp-sent")).toBeTruthy()
    })
  })
  it("should send an otp when the submit button of new number otp is clicked", async () => {
    const { getByAltText } = render(getPhoneComponent())
    const editButton = getByAltText("Edit")
    fireEvent.click(editButton)
    fireEvent.change(screen.getByPlaceholderText("New Number"), {
      target: { value: "1234567890" }
    })

    const submitButton = screen.getByTestId("new-number-submit")
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(screen.getByTestId("new-otp-sent")).toBeTruthy()
    })
    for (let i = 0; i < 6; i++) {
      fireEvent.change(screen.getByTestId(`OTP digit ${i}`), {
        target: { value: "1" }
      })
    }
    fireEvent.click(screen.getByTestId("new-otp-submit"))
    await waitFor(() => {
      expect(screen.getByTestId("new-otp-sent")).toBeTruthy()
    })
  })
})
