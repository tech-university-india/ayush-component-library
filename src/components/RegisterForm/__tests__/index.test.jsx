import React from "react"
import RegisterForm from "../index.tsx"
import { fireEvent, render, screen } from "@testing-library/react"
import { AlertContext } from "@/context/AlertContext"

jest.mock("next/router", () => ({
  useRouter: () => jest.fn()
}))

jest.mock("next/router", () => require("next-router-mock"))

describe("RegisterForm", () => {
  it("should render correctly", () => {
    const { asFragment } = render(
      <RegisterForm setHealthId="abc123" />
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it("should render the correct text", () => {
    render(<RegisterForm />)
    expect(screen.getByPlaceholderText("First Name")).toBeInTheDocument()
    expect(screen.getByPlaceholderText("Middle Name")).toBeInTheDocument()
  })

  const setHealthId = jest.fn()
  const setFormData = jest.fn()

  it("should handle onChange field when user types input", () => {
    render(
      <AlertContext.Provider value={{ showAlert: jest.fn() }}>
        <RegisterForm setHealthId={setHealthId} />
      </AlertContext.Provider>
    )
    const input = screen.getByPlaceholderText("Health ID")
    expect(input.value).toBe("")
    fireEvent.change(input, { target: { value: "1234567890" } })
    expect(input.value).toBe("1234567890")
  })

  it("should handle onChange field when user types input", () => {
    render(<RegisterForm setFormData={setFormData}/>)
    const input = screen.getByPlaceholderText("Email ID")
    expect(input.value).toBe("")
    fireEvent.change(input, { target: { value: "abc123@gmail.com" } })
    expect(input.value).toBe("abc123@gmail.com")
  })

  it("should handle onChange field when user types input", () => {
    render(<RegisterForm setFormData={setFormData}/>)
    const input = screen.getByPlaceholderText("Password")
    expect(input.value).toBe("")
    fireEvent.change(input, { target: { value: "P@sso+123a" } })
    expect(input.value).toBe("P@sso+123a")
  })
})
