import React, { useState, useContext } from 'react'

export const UserContext = React.createContext()

export function useLogin() {
  return useContext(UserContext)
}

export function LoginProvider(props) {
  const [logUser, setLogUser] = useState(null)
  const [isLogin, setIsLogin] = useState(false)

  const value = {
    logUser,
    setLogUser,
    isLogin,
    setIsLogin,
  }

  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  )
}