import { LOGIN } from "@/common/constants"
import { default as axios, AxiosError } from "axios"
import { default as makeRequest } from "../index.ts"
jest.mock("axios")
describe("Tests for Make Request", () => {
  it("should make an axios call when input it correct", async () => {
    axios.mockResolvedValue({ data: 1 })
    const data = await makeRequest(LOGIN)
    expect(data).toBe(1)
  })
  it("when navigate is true and an error is thrown then the navigate function should be called", async () => {
    axios.mockRejectedValue({
      response: {
        status: 401
      }
    })
    const navigate = jest.fn()
    await makeRequest(LOGIN, {}, navigate)
    expect(navigate).toHaveBeenCalledWith("/error/401")
  })
  it("when navigate is true and an error is thrown then the navigate function should be called with no status", async () => {
    axios.mockRejectedValue({

    })
    const navigate = jest.fn()
    await makeRequest(LOGIN, {}, navigate)
    expect(navigate).toHaveBeenCalledWith("/error")
  })
  it("when axios error is thrown an no navigate is there", async () => {
    axios.mockRejectedValue(new AxiosError("error", { status: 401 }, "error", "error", {
      data: {
        message: "error"
      }
    }))
    try {
      await makeRequest(LOGIN, {})
    } catch (error) {
      expect(error.message).toBe("Something went wrong")
    }
  })
  it("when any other error is thrown an no navigate is there", async () => {
    axios.mockRejectedValue(new Error())

    try {
      await makeRequest(LOGIN, {})
    } catch (error) {
      expect(error.message).toBe("Something went wrong")
    }
  })
})
