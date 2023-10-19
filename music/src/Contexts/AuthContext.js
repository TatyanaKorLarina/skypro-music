import React, { useState, useContext } from 'react'

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

function getAuthFromLocalStorage () {
  try {
    return JSON.parse(localStorage.getItem("user"))

  } catch (error) {
    console.error (error)
    return null
  }
}

export function AuthProvider(props) {
  const [authUser, setAuthUser] = useState(getAuthFromLocalStorage)
  const [isLogIn, setIsLogIn] = useState(false)

  const value = {
    authUser,
    setAuthUser,
    isLogIn,
    setIsLogIn,
  }

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  )
}