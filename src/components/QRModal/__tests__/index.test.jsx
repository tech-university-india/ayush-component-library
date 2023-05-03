import React from "react"
import QRModal from "../index.tsx"

import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import { useAlert } from "@/context/AlertContext"
import {makeRequest} from "@/utils/makeRequest"
jest.mock("@/utils/makeRequest", () => jest.fn())
jest.mock("@/context/AlertContext", () => ({
  useAlert: jest.fn()
}))
describe("QR Modal", () => {
  useAlert.mockReturnValue({
    showAlert: jest.fn()
  })
  it("should render component", () => {
    const { asFragment } = render(<QRModal />)
    expect(asFragment()).toMatchSnapshot()
  })
  it("change the visiblity when the qr btn is clicked ", () => {
    makeRequest.mockResolvedValue({ data: "qrcode" })
    render(<QRModal />)
    fireEvent.click(screen.getByTestId("qr-btn"))
    expect(screen.getByTestId("loader")).toBeTruthy()
    waitFor(() => {
      expect(screen.getByAltText("qr-code")).toBeTruthy()
    })
  })
  it("should show alert when the request fails", () => {
    makeRequest.mockRejectedValue(new Error("error"))
    render(<QRModal />)
    fireEvent.click(screen.getByTestId("qr-btn"))
    expect(screen.getByTestId("loader")).toBeTruthy()
    waitFor(() => {
      expect(useAlert().showAlert).toBeCalledWith("error")
    })
  })
  it("should close the modal when the container is clicked", () => {
    makeRequest.mockResolvedValue({ data: "qrcode" })
    render(<QRModal />)
    fireEvent.click(screen.getByTestId("qr-btn"))
    expect(screen.getByTestId("loader")).toBeTruthy()
    waitFor(() => {
      fireEvent.click(screen.getByTestId("container"))
      expect(screen.queryByTestId("container")).toBeNull()
    })
  })
})
