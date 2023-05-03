/* eslint-disable no-undef */
import React from "react"
import CustomButton from "../index"
import { fireEvent, render } from "@testing-library/react"
describe("Tests for Custom Button", () => {
  it("should render the button with text", () => {
    const { getByText } = render(<CustomButton>Hello</CustomButton>)
    expect(getByText("Hello")).toBeTruthy()
  })
  it("should show inner shadow when the button is selected", () => {
    const screen = render(<CustomButton isSelected>Hello</CustomButton>)
    expect(screen.getByText("Hello").className).toContain("shadow-selected")
  })
  it("should show outer shadow when the button is not selected", () => {
    const screen = render(<CustomButton>Hello</CustomButton>)
    expect(screen.getByText("Hello").className).toContain("shadow-xl")
  })
  it("should call the onClick function when the button is clicked", () => {
    const onClick = jest.fn()
    const screen = render(<CustomButton onClick={onClick}>Hello</CustomButton>)
    fireEvent.click(screen.getByText("Hello"))
    expect(onClick).toHaveBeenCalled()
  })
})
