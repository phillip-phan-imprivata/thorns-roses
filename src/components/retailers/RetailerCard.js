export const RetailerCard = (props) => {
  return (
    <section className="retailer">
      <div className="retailer__name"><h2>{props.retailer.name}</h2></div>
      <div className="retailer__address">Address: {props.retailer.address}</div>
      <div className="retailer__flowers">
        <h3>Flowers</h3>
        <ul>
          {
            props.flowers.map(flower => {
              return <li key={flower.id}>{flower.color} {flower.species}: ${((flower.price * props.distributor.markup + flower.price) * props.retailer.markup + (flower.price * props.distributor.markup + flower.price)).toFixed(2)}</li>
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