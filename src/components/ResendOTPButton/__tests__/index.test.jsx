import React from "react"
import ResendOTPButton from "../index.tsx"
import { render, screen } from "@testing-library/react"


describe("Tests for resend otp button", () => {
  it("should render correctly", () => {
    render(<ResendOTPButton />)
    expect(screen.getByText("Re-Send")).toBeTruthy()
  })
  it("should render timer when timerEnabled is true", () => {
    render(<ResendOTPButton enabled={true} timerLength={90} />)
    expect(screen.getByTestId("resend-countdown")).toBeTruthy()
  })
  it("should call the restart timer function when the button is clicked", () => {
    const restartTimer = jest.fn()
    render(<ResendOTPButton enabled={false} timerLength={90} onclick={restartTimer} />)
    screen.getByText("Re-Send").click()
    expect(restartTimer).toBeCalled()
  })
})
