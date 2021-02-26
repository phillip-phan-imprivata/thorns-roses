import React, { createContext, useState } from "react"

export const DistributorsContext = createContext()

export const DistributorsProvider = (props) => {
  const [distributors, setdistributors] = useState([])

  const getDistributors = () => {
    fetch("http://localhost:8088/distributors")
      .then(res => res.json())
      .then(setdistributors)
  }

  return (
    <DistributorsContext.Provider value={{
      distributors, getDistributors
    }}>
      {props.children}
    </DistributorsContext.Provider>
  )
}