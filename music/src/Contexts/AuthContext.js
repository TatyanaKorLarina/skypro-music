import React, { useState, useContext } from 'react'

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider(props) {
  const [authUser, setAuthUser] = useState(null)
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