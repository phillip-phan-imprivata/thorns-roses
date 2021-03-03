import React, { useContext, useEffect } from "react"
import { DistributorsContext } from "../distributors/DistributorsProvider"
import { FlowerContext } from "../flowers/FlowerProvider"
import { NurseryContext } from "../nurseries/NurseryProvider"
import { NurseryDistributorsContext } from "../nurseryDistributors/nurseryDistributorsProvider"
import { NurseryFlowersContext } from "../nurseryFlowers/nurseryFlowersProvider"
import { RetailerCard } from "./RetailerCard"
import { RetailerContext } from "./RetailerProvider"
import "./Retailers.css"

export const RetailerList = () => {
  const {retailers, getRetailers} = useContext(RetailerContext)
  const {distributors, getDistributors} = useContext(DistributorsContext)
  const {flowers, getFlowers} = useContext(FlowerContext)
  const {nurseries, getNurseries} = useContext(NurseryContext)
  const {nurseryDistributors, getNurseryDistributors} = useContext(NurseryDistributorsContext)
  const {nurseryFlowers, getNurseryFlowers} = useContext(NurseryFlowersContext)

  useEffect(() => {
    getFlowers()
    .then(getNurseryFlowers)
    .then(getNurseries)
    .then(getNurseryDistributors)
    .then(getDistributors)
    .then(getRetailers)
  }, [])

  return (
    <div className="retailers">
      {
        retailers.map(retailer => {
          const matchingDistributor = distributors.find(distributor => distributor.id === retailer.distributorId)

          let matchingNurseries = nurseryDistributors.filter(nd => nd.distributorId === matchingDistributor.id)
          matchingNurseries = matchingNurseries.map(nd => nurseries.find(nursery => nursery.id === nd.nurseryId))

          let matchingFlowers = matchingNurseries.map(nursery => {
            let filteredNF = nurseryFlowers.filter(nf => nf.nurseryId === nursery.id)
            return filteredNF.map(nf => {
              let foundFlower = flowers.find(flower => flower.id === nf.flowerId)
              foundFlower.price = nf.price
              return foundFlower
            })
          })

          let flowerList = []
          matchingFlowers.map(flower => {
            flower.map(flower => flowerList.push(flower))
          })
          
          flowerList = new Set(flowerList)
          let flowerArr = Array.from(flowerList)

          return <RetailerCard key={retailer.id} retailer={retailer} nurseries={matchingNurseries} flowers={flowerArr} distributor={matchingDistributor} />
        })
      }
    </div>
  )
}