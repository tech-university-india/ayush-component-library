import React from "react"
import KeyValueDisplay from "../index.tsx"

import { render } from "@testing-library/react"

describe("KeyValueDisplay", () => {
  it("should render the component without onEditClick callback props", () => {
    const dummyPropsWithoutOnEditClick = {
      keyText: "Key",
      valueText: "Value"
    }

    const keyValueComponent = render(<KeyValueDisplay {...dummyPropsWithoutOnEditClick} />).asFragment()
    expect(keyValueComponent).toMatchSnapshot()
  })

  it("should render the component with onEditClick callback props", () => {
    const dummyPropsWithOnEditClick = {
      keyText: "Key",
      valueText: "Value",
      onEditClick: () => {
        // do nothing
      }
    }

    const keyValueComponent = render(<KeyValueDisplay {...dummyPropsWithOnEditClick} />).asFragment()
    expect(keyValueComponent).toMatchSnapshot()
  })
})
