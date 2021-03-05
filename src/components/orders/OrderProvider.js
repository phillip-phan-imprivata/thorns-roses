import React, { createContext, useState } from "react"

export const OrderContext = createContext()

export const OrderProvider = (props) => {
  const [orders, setOrders] = useState([])

  const getOrders = () => {
    return fetch("http://localhost:8088/orders")
    .then(res => res.json())
    .then(setOrders)
  }

  const saveOrder = (order) => {
  return fetch("http://localhost:8088/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(order)
  })
  .then(getOrders)
}

  return (
    <OrderContext.Provider value={{
      orders, getOrders, saveOrder
    }}>
      {props.children}
    </OrderContext.Provider>
  )
}