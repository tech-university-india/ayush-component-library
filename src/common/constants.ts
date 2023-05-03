/* istanbul ignore file */

export const REGISTER_ROUTE = "/register"
export const LOGIN_ROUTE = "/login"
export const DEACTIVATE_ROUTE = "/deactivate"
export const HOME_ROUTE = "/"

export const BACKEND_URL = "http://localhost:8000"
export const ONBOARDING_URL = "http://localhost:9005"

export const RETRIEVE_TYPES = {
  AADHAAR: "AADHAAR",
  MOBILE: "MOBILE"
}

export const RETRIVAL_JOURNEY = {
  IDLE: "IDLE",
  INITIATED: "INITIATED",
  OTP: "OTP"
}

export const REGISTER = {
  baseUrl: ONBOARDING_URL,
  url: "/onboarding/users",
  method: "post"
}
export const VERIFY_REGISTER_OTP = {
  baseUrl: ONBOARDING_URL,
  url: "/onboarding/users/verifyOTP",
  method: "post"
}

export const RESEND_REGISTER_OTP = {
  baseUrl: ONBOARDING_URL,
  url: "/onboarding/users/resendAadhaarOtp",
  method: "post"
}

export const LOGIN = {
  url: "/auth/users/login",
  method: "post"
}

export const RESEND_LOGIN_OTP = {
  url: "/auth/users/login/resendOtp",
  method: "post"
}

export const VERIFY_OTP = {
  url: "/auth/users/login/verifyOtp",
  method: "post"
}

export const REACTIVATE = {
  url: "/auth/users/reactivate",
  method: "post"
}
export const REACTIVATE_OTP = {
  url: "/auth/users/reactivate/verify",
  method: "post"
}

export const DEACTIVATE_GENERATE_OTP = {
  url: "/users/deactivate",
  method: "post"
}

export const DEACTIVATE_VERIFY_OTP = {
  url: "/users/deactivate/verify",
  method: "post"
}
export const DEACTIVATE_VIA_PASSWORD = {
  url: "/users/deactivate/password",
  method: "post"
}
export const REGISTER_CHECK_GENERATE_MOBILE_OTP = {
  baseUrl: ONBOARDING_URL,
  url: "/onboarding/users/checkAndGenerateMobileOTP",
  method: "post"
}
export const REGISTER_VERIFY_MOBILE_OTP = {
  baseUrl: ONBOARDING_URL,
  url: "/onboarding/users/verifyMobileOTP",
  method: "post"
}

export const REGISTER_CREATE_HEALTHID = {
  baseUrl: ONBOARDING_URL,
  url: "/onboarding/users/createHeathIDPreVerifiedNumber",
  method: "post"
}

export const MOBILE_CHANGE_NEW_NUMBER_OTP = {
  url: "/users/update/mobile/new",
  method: "post"
}

export const MOBILE_CHANGE_NEW_VERIFY_OTP = {
  url: "/users/update/mobile/new/verify",
  method: "post"
}

export const MOBILE_CHANGE_OLD_NUMBER_OTP = {
  url: "/users/update/mobile/old",
  method: "post"
}

export const MOBILE_CHANGE_OLD_VERIFY_OTP = {
  url: "/users/update/mobile/old/verify",
  method: "post"
}

export const NUMBER_EDIT_PROCESS_STATUS = {
  IDLE: "IDLE",
  INITIATED: "INITIATED",
  NEW_NUMBER_SENT: "NEW_NUMBER_SENT",
  NEW_NUMBER_VERIFIED: "NEW_OTP_VERIFIED",
  OLD_NUMBER_SENT: "OLD_NUMBER_SENT",
  OLD_NUMBER_VERIFIED: "OLD_NUMBER_VERIFIED"
}

export const VERIFICATION_TYPE = {
  AADHAAR: "AADHAAR",
  MOBILE: "MOBILE",
  PASSWORD: "PASSWORD"
}

export const GET_PROFILE = {
  url: "users/",
  method: "get"
}

export const VALIDATE_TOKEN = {
  url: "/users/verifyToken",
  method: "get"
}

export const DELETE_PROFILE_GENERATE_OTP = {
  url: "/users/delete",
  method: "post"
}

export const DELETE_PROFILE_VERIFY_OTP = {
  url: "/users/delete/otp",
  method: "post"
}

export const DELETE_PROFILE_VIA_PASSWORD = {
  url: "/users/delete/password",
  method: "post"
}
export const INITIATE_EMAIL_CHANGE = {
  url: "users/update/email",
  method: "post"
}

export const EMAIL_CHANGE_VERIFY_OTP = {
  url: "users/update/email/verify",
  method: "post"
}

export const changePasswordRequest = {
  url: "users/update/password/",
  method: "post"
}

export const changePasswordUpdate = {
  url: "users/update/password/verify",
  method: "post"
}

export const FORGOT_ABHA_INIT = {
  url: "/auth/users/forgot/init",
  method: "post"
}

export const FORGOT_ABHA_VERIFY = {
  url: "/auth/users/forgot/verify",
  method: "post"
}

export const FORGOT_ABHA_RESEND = {
  url: "/auth/users/forgot/resend",
  method: "post"
}

export const GET_PROFILE_QR = {
  url: "users/qr",
  method: "get"
}
