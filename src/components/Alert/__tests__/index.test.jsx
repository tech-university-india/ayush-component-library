/* eslint-disable no-undef */
import React from "react"
import Alert from ".."
import { fireEvent, render } from "@testing-library/react"
describe("Tests for Alert Dialog", () => {
  it("should render the component", () => {
    const wrapper = render(<Alert />)
    expect(wrapper).toMatchSnapshot()
  })
  it("should render the component with props", () => {
    const screen = render(<Alert input="test" />)
    expect(screen.getByText("test")).toBeTruthy()
  })
  it("should call the close alert callback when the close button is clicked", () => {
    const setAlert = jest.fn()
    const screen = render(<Alert setAlert={setAlert} />)

    fireEvent.click(screen.getByRole("button"))
    expect(setAlert).toBeCalled()
  })
})
