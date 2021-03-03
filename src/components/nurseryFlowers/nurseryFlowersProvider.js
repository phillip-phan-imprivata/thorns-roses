import React, { createContext, useState } from "react"

export const NurseryFlowersContext = createContext()

export const NurseryFlowersProvider = (props) => {
  const [nurseryFlowers, setNurseryFlowers] = useState([])

  const getNurseryFlowers = () => {
    return fetch("http://localhost:8088/nurseryFlowers")
      .then(res => res.json())
      .then(setNurseryFlowers)
  }

  return (
    <NurseryFlowersContext.Provider value={{
      nurseryFlowers, getNurseryFlowers
    }}>
      {props.children}
    </NurseryFlowersContext.Provider>
  )
}