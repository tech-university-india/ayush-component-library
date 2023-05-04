import { VALIDATE_TOKEN } from "../common/constants"
import {makeRequest} from "./makeRequest"

export default async function validateToken () {
  const token = localStorage.getItem("token")
  const refreshToken = localStorage.getItem("refreshToken")
  if (!token) {
    throw new Error("Unauthorized")
  }
  const { data } = await makeRequest(VALIDATE_TOKEN, {
    headers: {
      "X-token": token,
      refreshToken
    }
  })
  if (!data) { throw new Error("Unauthorized") }
  if (data.accessToken) {
    localStorage.setItem("token", data.accessToken)
  }
  return true
}
