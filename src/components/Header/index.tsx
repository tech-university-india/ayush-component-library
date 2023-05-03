"use client"
import React, { useContext } from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSignOut } from "@fortawesome/free-solid-svg-icons"
import { UserContext } from "../../context/UserContext"

interface HeaderProps {
  text?: string
  isLoggedIn?: boolean
}
export default function Header ({ text, isLoggedIn }: HeaderProps) : JSX.Element | null {
  const user : any = useContext(UserContext)
  const handleIconOnClick = () => {
    user && user.logout()
  }

  return (
    <header className="bg-primary shadow-header px-6 items-center p-3 w-full rounded-md rounded-t-none flex justify-between">
      <h1 className="text-3xl font-light">{text}</h1>
      {
        isLoggedIn && (
          <FontAwesomeIcon icon={faSignOut} onClick={handleIconOnClick} />
        )
      }

    </header>
  )
}

Header.propTypes = {
  text: PropTypes.string.isRequired
}
