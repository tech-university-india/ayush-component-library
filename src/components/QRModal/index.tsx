import React from "react"
import Loading from "../Loading"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQrcode } from "@fortawesome/free-solid-svg-icons"
import {makeRequest} from "../../utils/makeRequest"
import { GET_PROFILE_QR } from "../../common/constants"
import { useAlert } from "../../context/AlertContext"

function QRModal (): JSX.Element | null {
  const [visible, setVisible] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [qr, setQr] = React.useState("")
  const { showAlert } = useAlert()
  const onQRCodeClick = async () => {
    try {
      setVisible(true)
      setLoading(true)
      const { data } = await makeRequest(GET_PROFILE_QR, {
        headers: {
          "X-Token": localStorage.getItem("token")
        }
      })
      setQr(data)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setVisible(false)
      showAlert(error.message)
    }
  }

  if (!visible) {
    return <FontAwesomeIcon
      data-testid="qr-btn"
      onClick={onQRCodeClick}
      icon={faQrcode} className="text-secondary" />
  }

  return (
    <div
      id="container"
      onClick={() => setVisible(false)}
      data-testid="container"
      className="absolute z-20 inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex justify-center items-center p-4"
    >
      <div className="bg-white w-96 h-96 rounded-lg shadow-lg flex flex-col justify-center items-center">
        <div className="w-80 h-80 bg-primary rounded-lg flex justify-center items-center">
          {loading ? <Loading color="green" /> : <img src={`data:image/jpeg;base64,${qr}`} alt="qr-code" className="w-64 h-64" />}
        </div>
      </div>
    </div>
  )
}

export default QRModal
