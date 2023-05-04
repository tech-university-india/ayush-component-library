import { FORGOT_ABHA_INIT, FORGOT_ABHA_RESEND, FORGOT_ABHA_VERIFY } from "../common/constants"
import {makeRequest} from "./makeRequest"

async function generateOtp (credentials : any, type : any) : Promise<any> {
  const { data } = await makeRequest(FORGOT_ABHA_INIT, {
    data: {
      credentials,
      type
    }
  })
  return data
}

async function verifyOtp (type : any, otp : any, firstName : any, yearOfBirth : any, gender : any, txnId : any) : Promise<any> {
  let body : any = {
    type,
    otp,
    txnId
  }
  if (type === "MOBILE") {
    body = {
      ...body,
      firstName,
      yearOfBirth,
      gender
    }
  }
  const { data } = await makeRequest(FORGOT_ABHA_VERIFY, {
    data: body
  })
  return data.jwtResponse
}

async function resendOtp (txnId : any, type : any) : Promise<any> {
  const { data } = await makeRequest(FORGOT_ABHA_RESEND, {
    data: {
      txnId,
      type
    }
  })
  return data
}

export {
  generateOtp,
  verifyOtp,
  resendOtp
}
