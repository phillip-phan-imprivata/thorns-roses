import React, { createContext, useState } from "react"

export const NurseryContext = createContext()

export const NurseryProvider = (props) => {
  const [nurseries, setNurseries] = useState([])

  const getNurseries = () => {
    return fetch("http://localhost:8088/nurseries")
      .then(res => res.json())
      .then(setNurseries)
  }

  return (
    <NurseryContext.Provider value={{
      nurseries, getNurseries
    }}>
      {props.children}
    </NurseryContext.Provider>
  )
}