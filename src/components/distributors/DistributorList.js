import React, { useContext, useEffect } from "react"
import { FlowerContext } from "../flowers/FlowerProvider"
import { NurseryDistributorsContext } from "../nurseryDistributors/nurseryDistributorsProvider"
import { NurseryFlowersContext } from "../nurseryFlowers/nurseryFlowersProvider"
import { RetailerContext } from "../retailers/RetailerProvider"
import { DistributorsContext } from "./DistributorsProvider"
import { DistributorCard } from "./DistributorCard"
import "./Distributors.css"

export const DistributorList = () => {
  const {distributors, getDistributors} = useContext(DistributorsContext)
  const {nurseryDistributors, getNurseryDistributors} = useContext(NurseryDistributorsContext)
  const {nurseryFlowers, getNurseryFlowers} = useContext(NurseryFlowersContext)
  const {flowers, getFlowers} = useContext(FlowerContext)
  const {retailers, getRetailers} = useContext(RetailerContext)

  useEffect(() => {
    getRetailers()
    .then(getFlowers)
    .then(getNurseryFlowers)
    .then(getNurseryDistributors)
    .then(getDistributors)
  }, [])

  return (
    <div className="distributors">
      {
        distributors.map(distributor => {
          let matchingNurseries = nurseryDistributors.filter(nd => nd.distributorId === distributor.id)
          return matchingNurseries.map(nd => {
            let matchingFlowers = nurseryFlowers.filter(nf => nf.nurseryId === nd.nurseryId)
            matchingFlowers = matchingFlowers.map(nf => {
              let flower = flowers.find(flow => flow.id === nf.flowerId)
              flower.price = nf.price
              return flower
            })
            let matchingRetailer = retailers.filter(retailer => retailer.distributorId === distributor.id)

            return <DistributorCard key={nd.id} flowers={matchingFlowers} retailer={matchingRetailer} distributor={distributor} />
          })
        })
      }
    </div>
  )
}