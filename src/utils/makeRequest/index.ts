import { BACKEND_URL } from "../../common/constants"
import axios, { AxiosError } from "axios"


async function makeRequest(
  apiEndPoint?: any,
  dynamicConfig = {},
  navigate?: any
) : Promise<any> {
  try {
    const requestDetails = {
      baseURL: apiEndPoint.baseUrl ?? BACKEND_URL,
      url: apiEndPoint.url,
      method: apiEndPoint.method,
      ...dynamicConfig
    } as any
    const { data } = await axios(requestDetails)
    return data
  } catch (error) {
    if (navigate) {
      const errorStatus = error.response?.status
      if (errorStatus) {
        navigate(`/error/${errorStatus}`)
      } else {
        navigate("/error")
      }
      return
    }
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.message || "Something went wrong")
    }
    throw new Error("Something went wrong")
  }
}

export  {makeRequest}
