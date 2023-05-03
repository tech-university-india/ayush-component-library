import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import DropDownBox from "../index.tsx"


describe("Tests for dropdown box", () => {
  it("should render the component", () => {
    render(<DropDownBox placeholder={"Hello"} onSelect={() => {
      // do nothing
    }}/>)
    expect(screen.getByText("Hello")).toBeTruthy()
  })

  it("it should have the items when rendered", () => {
    const screen = render(<DropDownBox items={["one"]} onSelect={() => {
      // do nothing
    }}/>)
    expect(screen.getByText("one")).toBeTruthy()
  })
  it("should change the value when an item is selected", () => {
    const onSelect = jest.fn()
    const screen = render(<DropDownBox items={["one"]} onSelect={onSelect} />)
    fireEvent.change(screen.getByTestId("dropdown"), { target: { value: "one" } })
    expect(onSelect).toBeCalled()
  })
})
