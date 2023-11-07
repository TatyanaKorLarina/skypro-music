import React, { useState, useContext, useEffect } from 'react'

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

function getAuthFromLocalStorage() {
  try {
    const user = localStorage.getItem("user");
    if (user) {
      // Check if the stored data is a valid JSON string
      const parsedUser = JSON.parse(user);
      if (typeof parsedUser === 'object') {
        return parsedUser;
      } else {
        console.error("Data in local storage is not a valid JSON object.");
        return null;
      }
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error parsing JSON from local storage:", error);
    return null; // Return a default value or handle the error as needed
  }
}

export function AuthProvider(props) {
  const [authUser, setAuthUser] = useState(getAuthFromLocalStorage)
  const [isLogIn, setIsLogIn] = useState(false)

  useEffect(() => {
    function handleStorageChange() {
      setAuthUser(getAuthFromLocalStorage())
    }

    window.addEventListener('storage', handleStorageChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])

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