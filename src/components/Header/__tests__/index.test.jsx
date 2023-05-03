import React from "react"
import Header from "../index.tsx"

import { render } from "@testing-library/react"

describe("Header", () => {
  it("should render the component with text props", () => {
    const { getByText } = render(<Header text="Hello" />)
    expect(getByText("Hello")).toBeTruthy()
  })
})
