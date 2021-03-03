import React, { createContext, useState } from "react"

export const RetailerContext = createContext()

export const RetailerProvider = (props) => {
  const [retailers, setRetailers] = useState([])

  const getRetailers = () => {
    return fetch("http://localhost:8088/retailers")
    .then(res => res.json())
    .then(setRetailers)
  }

  return (
    <RetailerContext.Provider value={{
      retailers, getRetailers
    }}>
      {props.children}
    </RetailerContext.Provider>
  )
}