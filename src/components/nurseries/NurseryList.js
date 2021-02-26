import React, { useContext, useEffect } from "react"
import { NurseryContext } from "./NurseryProvider"
import { NurseryCard } from "./NurseryCard"
import { FlowerContext } from "../flowers/FlowerProvider"
import { NurseryFlowersContext } from "../nurseryFlowers/nurseryFlowersProvider"
import { DistributorsContext } from "../distributors/DistributorsProvider"
import { NurseryDistributorsContext } from "../nurseryDistributors/nurseryDistributorsProvider"
import "./Nurseries.css"

export const NurseryList = () => {
  const {nurseries, getNurseries} = useContext(NurseryContext)
  const {flowers, getFlowers} = useContext(FlowerContext)
  const {nurseryFlowers, getNurseryFlowers} = useContext(NurseryFlowersContext)
  const {distributors, getDistributors} = useContext(DistributorsContext)
  const {nurseryDistributors, getNurseryDistributors} = useContext(NurseryDistributorsContext)

  useEffect(() => {
    getNurseryFlowers()
    getFlowers()
    getNurseries()
    getDistributors()
    getNurseryDistributors()
  }, [])

  return (
    <div className="nurseries">
      {
        nurseries.map(nursery => {
          let matchingFlowers = nurseryFlowers.filter(nf => nf.nurseryId === nursery.id)
          matchingFlowers = matchingFlowers.map(nf => {
            let flower = flowers.find(flower => flower.id === nf.flowerId)
            flower.price = matchingFlowers.find(nurseryFlower => nurseryFlower.flowerId === flower.id).price
            return flower
          })
          let matchingDistributors = nurseryDistributors.filter(nd => nd.nurseryId === nursery.id)
          matchingDistributors = matchingDistributors.map(nd => {
            return distributors.find(distributor => distributor.id === nd.distributorId)
          })
          return <NurseryCard key={nursery.id} nursery={nursery} matchingFlowers={matchingFlowers} matchingDistributors={matchingDistributors} />
        })
      }
    </div>
  )
}