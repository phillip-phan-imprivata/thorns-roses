import React, { createContext, useState } from "react"

export const NurseryDistributorsContext = createContext()

export const NurseryDistributorsProvider = (props) => {
  const [nurseryDistributors, setNurseryDistributors] = useState([])

  const getNurseryDistributors = () => {
    return fetch("http://localhost:8088/nurseryDistributors")
      .then(res => res.json())
      .then(setNurseryDistributors)
  }

  return (
    <NurseryDistributorsContext.Provider value={{
      nurseryDistributors, getNurseryDistributors
    }}>
      {props.children}
    </NurseryDistributorsContext.Provider>
  )
}