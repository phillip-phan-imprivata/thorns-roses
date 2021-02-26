export const NurseryCard = (props) => {
  return (
    <section className="nursery">
      <h2 className="nursery__name">{props.nursery.name}</h2>
      <div className="nursery__flowers">
        <h3>Flowers</h3>
        <ul>
          {
            props.matchingFlowers.map(flower => <li key={flower.id}>{flower.color} {flower.species}: ${flower.price.toFixed(2)}</li>)
          }
        </ul>
      </div>
      <div className="nursery__distributors">
        <h3>Distributors</h3>
        <ul>
          {
            props.matchingDistributors.map(distributor => <li key={distributor.id}>{distributor.name}</li>)
          }
        </ul>
      </div>
    </section>
  )
}