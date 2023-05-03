"use client"
import { GET_PROFILE, REGISTER_ROUTE } from "../common/constants"
import {makeRequest} from "../utils/makeRequest/index"
import { useRouter } from "next/router"
import React, { useEffect } from "react"


const UserContext = React.createContext<any>(null)

interface UserStateProps {
  children: React.ReactNode
  pageProps: any
}


const UserState = ({ children, pageProps }: UserStateProps) => {
  const [user, setUser] = React.useState(null)

  async function fetchProfile(force?: boolean) {
    try {
      if ((!user || force) && pageProps.isProtected) {
        const token = localStorage.getItem("token")
        const { data } = await makeRequest(GET_PROFILE, {
          headers: {
            "x-token": token
          }
        })
        setUser({ ...user, ...data })
      }
    } catch (error) {
      logout()
    }
  }
  useEffect(() => {
    fetchProfile()
  }, [])
  const router = useRouter()

  function logout () {
    localStorage.clear()
    setUser(null)
    router.replace(REGISTER_ROUTE)
  }



  return (

    <UserContext.Provider value={{ user, setUser, fetchProfile, logout }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserState }
