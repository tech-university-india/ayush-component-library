import React from "react"
import { render, fireEvent } from "@testing-library/react"
import Dropdown from "../index.tsx"

describe("Dropdown", () => {
  it("should render the header component", () => {
    const headerComponent = jest.fn()
    render(<Dropdown title="Dropdown" headerComponent={headerComponent} />)
    expect(headerComponent).toHaveBeenCalled()
  })

  it("should toggle the dropdown when header is clicked", () => {
    const headerComponent = ({ toggleDropdown }) => (
      <button onClick={toggleDropdown}>Dropdown</button>
    )
    const { getByText, queryByText } = render(
      <Dropdown title="Dropdown" headerComponent={headerComponent}>
        <div>Option 1</div>
        <div>Option 2</div>
        <div>Option 3</div>
      </Dropdown>
    )
    const dropdownHeader = getByText("Dropdown")
    fireEvent.click(dropdownHeader)
    expect(queryByText("Option 1")).toBeInTheDocument()
    fireEvent.click(dropdownHeader)
    expect(queryByText("Option 1")).not.toBeInTheDocument()
  })
})
