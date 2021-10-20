import React, { useState, createContext } from 'react'

export const AppContext = createContext()

export const AppProvider = (props) => {

  const [userData, setUserData] = useState({
    origin: null,
    destination: {},
    description: null,
    travelTime: 0
  })

  const saveUserData = (values) => {
    setUserData(values)
  }

  return (
    <AppContext.Provider value={{ userData, saveUserData }}>
      {props.children}
    </AppContext.Provider>
  )
}