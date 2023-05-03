import {
  MOBILE_CHANGE_NEW_NUMBER_OTP,
  MOBILE_CHANGE_NEW_VERIFY_OTP,
  MOBILE_CHANGE_OLD_NUMBER_OTP,
  MOBILE_CHANGE_OLD_VERIFY_OTP
} from "../../common/constants"

import {makeRequest} from "../../utils/makeRequest"

async function handleRequestForNewNumberSubmit (mobileNumber : any) : Promise<any> {
  const res = await makeRequest(MOBILE_CHANGE_NEW_NUMBER_OTP, {
    data: {
      mobileNumber
    },
    headers: {
      "X-token": localStorage.getItem("token")
    }
  })
  return res
}

async function handleRequestForNewNumberOtpSubmit(txnId : any, otp : any) : Promise<any>{
  await makeRequest(MOBILE_CHANGE_NEW_VERIFY_OTP, {
    data: {
      otp,
      txnId
    },
    headers: {
      "X-token": localStorage.getItem("token")
    }
  })
}

async function handleRequestForOldNumberVerification(txnId: any, authMethod: any) : Promise<any>{
  await makeRequest(MOBILE_CHANGE_OLD_NUMBER_OTP, {
    data: {
      authMethod,
      txnId
    },
    headers: {
      "X-token": localStorage.getItem("token")
    }
  })
}
async function handleRequestForOldNumberVerifySubmitClick  (
  credentials : any,
  authMethod : any,
  txnId:  any
) : Promise<any>{
  await makeRequest(MOBILE_CHANGE_OLD_VERIFY_OTP, {
    data: {
      credentials,
      authMethod,
      txnId
    },
    headers: {
      "X-token": localStorage.getItem("token")
    }
  })
}
export {
  handleRequestForNewNumberSubmit,
  handleRequestForOldNumberVerification,
  handleRequestForNewNumberOtpSubmit,
  handleRequestForOldNumberVerifySubmitClick
}
