export const DistributorCard = (props) => {
  return (
    <section className="distributor">
      <div className="distributor__name"><h2>{props.distributor.name}</h2></div>
      <div className="distributor__flowers">
        <h3>Flowers</h3>
        <ul>
          {props.flowers.map(flower => {
            return <li key={flower.id}>{flower.color} {flower.species}: ${(flower.price * props.distributor.markup + flower.price).toFixed(2)}</li>
          })}
        </ul>
      </div>
      <div className="distributor__retailer">
        <h3>Retailers</h3>
        <ul>
          {props.retailer.map(ret => {
            return <li key={ret.id}>{ret.name}<br></br>{ret.address}</li>
          })}
        </ul>
      </div>
    </section>
  )
}