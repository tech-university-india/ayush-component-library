/* eslint-disable no-undef */
import React from "react"
import TextBox from ".."
import { fireEvent, render, screen } from "@testing-library/react"

describe("TextBox", () => {
  it("should render the component using default props with placeholder 'Aadhaar Number'", () => {
    const dummyPropsDefault = {
      placeholder: "Aadhaar Number",
      onChange: () => {
        // do nothing
      }
    }

    const renderedComponent = render(<TextBox {...dummyPropsDefault} />)
    expect(
      renderedComponent.getByPlaceholderText("Aadhaar Number")
    ).toBeTruthy()
  })

  it("should render the component using props with text 'Aadhaar Number'", () => {
    const dummyPropsText = {
      text: "Aadhaar Number",
      onChange: () => {
        // do nothing
      }
    }

    const renderedComponent = render(<TextBox {...dummyPropsText} />)
    expect(renderedComponent.getByDisplayValue("Aadhaar Number")).toBeTruthy()
  })

  it("should render the component using props with disabled as true and text 'Aadhaar Number'", () => {
    const dummyPropsDisabled = {
      disabled: true,
      text: "Aadhaar Number",
      onChange: () => {
        // do nothing
      }
    }

    const renderedComponent = render(
      <TextBox {...dummyPropsDisabled} />
    ).asFragment()
    expect(renderedComponent).toMatchSnapshot()
  })

  it("should render the component using props for fixed text and placeholder as 'Health ID'", () => {
    const dummyPropsFixedText = {
      partialText: ".ayush@sbx",
      placeholder: "Health ID",
      onChange: () => {
        // do nothing
      }
    }

    const renderedComponent = render(
      <TextBox {...dummyPropsFixedText} />
    ).asFragment()
    expect(renderedComponent).toMatchSnapshot()
  })

  it("should render the component using props for no bg colour and placeholder as 'Aadhaar Number'", () => {
    const dummyPropsNoBg = {
      noBg: true,
      onChange: () => {
        // do nothing
      }
    }

    const renderedComponent = render(
      <TextBox {...dummyPropsNoBg} />
    ).asFragment()
    expect(renderedComponent).toMatchSnapshot()
  })

  it("should have input component as disabled when disabled true is passed in props", () => {
    const dummyPropsDisabledOnly = {
      disabled: true,
      placeholder: "Aadhaar Number",
      onChange: () => {
        // do nothing
      }
    }

    render(<TextBox {...dummyPropsDisabledOnly} />)
    const inputComponent = screen.getByPlaceholderText("Aadhaar Number")
    expect(inputComponent).toBeDisabled()
  })

  it("should call onChange callback passed as part of props when text changes", () => {
    const dummyPropsWithCallback = {
      placeholder: "Aadhaar Number",
      onChange: jest.fn(),
      partialText: "Hello"
    }
    // expect(dummyPropsWithCallback.onChange).not.toBeCalled()
    render(<TextBox {...dummyPropsWithCallback} />)
    const inputComponent = screen.getByTestId("partialText")
    fireEvent.change(inputComponent, { target: { value: "123456781234" } })
    expect(dummyPropsWithCallback.onChange).toBeCalled()
  })
  it("should render the component using props for no bg colour and placeholder as 'Aadhaar Number'", () => {
    const dummyPropsNoBg = {
      noBg: true,
      onChange: () => {
        // do nothing
      },
      placeholder: "Aadhaar Number"
    }

    render(
      <TextBox {...dummyPropsNoBg} />
    )
    expect(
      screen.getByPlaceholderText("Aadhaar Number").className).not.toContain("bg-textBox")
  })
  it("should render the component using props for disabled and placeholder as 'Aadhaar Number'", () => {
    const dummyPropsDisabled = {
      disabled: true,
      onChange: () => {
        // do nothing
      },
      placeholder: "Aadhaar Number"
    }

    render(
      <TextBox {...dummyPropsDisabled} />
    )
    expect(
      screen.getByPlaceholderText("Aadhaar Number").className).toContain("shadow-textBoxInset")
  })
})
