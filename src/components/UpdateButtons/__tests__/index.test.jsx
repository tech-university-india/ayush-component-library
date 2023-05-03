import UpdateButtons from "../index.tsx"
import React from "react"
import { render, screen } from "@testing-library/react"

describe("Update Buttons", () => {
  it("should render correctly with mainText", () => {
    render(<UpdateButtons onClick={jest.fn()} mainText="Delete Via"/>)
    expect(screen.getByText("Aadhaar")).toBeInTheDocument()
    expect(screen.getByText("Mobile")).toBeInTheDocument()
    expect(screen.getByText("Password")).toBeInTheDocument()
    expect(screen.getByText("Delete Via")).toBeInTheDocument()
    expect(screen.queryByText("Update Via")).toBeNull()
  })
  it("should render correctly without mainText", () => {
    render(<UpdateButtons onClick={jest.fn()}/>)
    expect(screen.getByText("Aadhaar")).toBeInTheDocument()
    expect(screen.getByText("Mobile")).toBeInTheDocument()
    expect(screen.getByText("Password")).toBeInTheDocument()
    expect(screen.queryByText("Update Via")).toBeInTheDocument()
  })
  it("should call onClick when clicked on button", () => {
    const onClick = jest.fn()
    render(<UpdateButtons onClick={onClick}/>)
    const button = screen.getByText("Aadhaar")
    button.click()
    expect(onClick).toBeCalledWith("Aadhaar")
  })
})
