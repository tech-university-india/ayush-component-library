/*
Screen Text Example:
 const screenText = {
   page1: {
     title: 'Page 1',
     info: 'Subtitle 1',
  }

}
*/

const screenText = {
  retrievalScreen: {
    title: "Retrieve ABHA Number",
    description:
    "Forgot your ABHA number? Enter your Aadhaar or Mobile Number to retrieve it.",
    genders: ["Male", "Female", "Others"],
    namePlaceHolder: "Name",
    dobPlaceHolder: "Year of Birth",
    genderPlaceHolder: "Select your gender"
  },

  loginScreen: {
    retrieveText: "Forgot your ABHA number?",
    phoneNumber: {
      title: "Phone: ",
      newPhoneInputPlaceHolder: "New Number"
    },
    reactivateText: "Reactivate your ABHA number"
  },

  otpInformation: {
    title: "Registration",
    footerText: "Already have an ABHA number? ",
    info: "This is different from what you have linked to your Aadhar number #.Enter OTP to confirm.",
    linkText: "Enter a different number ?"
  },
  patientScreen: {
    header: "Ayush",
    textFields: ["ABHA #:", "HealthId:", "Mobile:", "Email:"],
    dropdown: [
      {
        title: "Personal Details",
        fields: ["Name:", "Gender:", "Date Of Birth:"]
      },
      {
        title: "Address",
        fields: ["Street:", "Area:", "Pin Code:"]
      }
    ]
  }

}

export default screenText
