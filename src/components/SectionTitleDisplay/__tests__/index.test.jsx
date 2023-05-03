import React from "react"
import SectionTitleDisplay from "../index.tsx"

import { screen, fireEvent, render } from "@testing-library/react"

describe("SectionTitleDisplay", () => {
  it("should render the component without expandability", () => {
    const dummyPropsNoExpandable = {
      text: "Section Title"
    }

    const keyValueComponent = render(<SectionTitleDisplay {...dummyPropsNoExpandable} />).asFragment()
    expect(keyValueComponent).toMatchSnapshot()
  })

  it("should render the component with expandability when it is collapsed", () => {
    const dummyPropsCollapsed = {
      text: "Section Title",
      expanded: false
    }

    const keyValueComponent = render(<SectionTitleDisplay {...dummyPropsCollapsed} />).asFragment()
    expect(keyValueComponent).toMatchSnapshot()
  })

  it("should render the component with expandability when it is expanded", () => {
    const dummyPropsExpanded = {
      text: "Section Title",
      expanded: true
    }

    const keyValueComponent = render(<SectionTitleDisplay {...dummyPropsExpanded} />).asFragment()
    expect(keyValueComponent).toMatchSnapshot()
  })

  it("should call onExpandClick callback prop when it is collapsed initially", () => {
    const dummyPropsCollapsedWithFn = {
      text: "Section Title",
      expanded: false,
      onExpandClick: jest.fn()
    }

    expect(dummyPropsCollapsedWithFn.onExpandClick).not.toBeCalled()
    render(<SectionTitleDisplay {...dummyPropsCollapsedWithFn} />)
    const keyValueImage = screen.getByAltText("Expand")
    fireEvent.click(keyValueImage)
    expect(dummyPropsCollapsedWithFn.onExpandClick).toBeCalled()
  })

  it("should call onExpandClick callback prop when it is expanded initially", () => {
    const dummyPropsCollapsedWithFn = {
      text: "Section Title",
      expanded: true,
      onExpandClick: jest.fn()
    }

    expect(dummyPropsCollapsedWithFn.onExpandClick).not.toBeCalled()
    render(<SectionTitleDisplay {...dummyPropsCollapsedWithFn} />)
    const keyValueImage = screen.getByAltText("Collapse")
    fireEvent.click(keyValueImage)
    expect(dummyPropsCollapsedWithFn.onExpandClick).toBeCalled()
  })
})
