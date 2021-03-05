import React, { useContext } from "react"
import { OrderContext } from "../orders/OrderProvider"

export const RetailerCard = (props) => {
  const {saveOrder} = useContext(OrderContext)

  const handleAddOrder = (event) => {
    const newOrder = {
      customerId: 0,
      retailerId: 0,
      flowerId: 0
    }

    const [prefix, id] = event.target.id.split("--")

    newOrder.customerId = parseInt(localStorage.flower_customer)
    newOrder.retailerId = props.retailer.id
    newOrder.flowerId = parseInt(id)

    saveOrder(newOrder)
  }

  return (
    <section className="retailer">
      <div className="retailer__name"><h2>{props.retailer.name}</h2></div>
      <div className="retailer__address">Address: {props.retailer.address}</div>
      <div className="retailer__flowers">
        <h3>Flowers</h3>
        <ul>
          {
            props.flowers.map(flower => {
              return (
                <li key={flower.id}>
                  {flower.color} {flower.species}: ${((flower.price * props.distributor.markup + flower.price) * props.retailer.markup + (flower.price * props.distributor.markup + flower.price)).toFixed(2)} 
                  <button className="btn" id={`btn--${flower.id}`} onClick={handleAddOrder}>Add to Cart</button>
                </li>
              )
            })
          }
        </ul>
      </div>
      <div className="retailer__distributor">
        <h3>Distributor</h3>
        <div>{props.distributor.name}</div>
      </div>
      <div className="retailer__nurseries">
        <h3>Nurseries</h3>
        <ul>
          {
            props.nurseries.map(nursery => {
              return <li key={nursery.id}>{nursery.name}</li>
            })
          }
        </ul>
      </div>
    </section>
  )
}