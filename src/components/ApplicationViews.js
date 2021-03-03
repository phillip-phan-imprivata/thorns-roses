import React from "react"
import { Route } from "react-router-dom"
import { NurseryProvider } from "./nurseries/NurseryProvider"
import { NurseryList } from "./nurseries/NurseryList"
import { FlowerProvider } from "./flowers/FlowerProvider"
import { NurseryFlowersProvider } from "./nurseryFlowers/nurseryFlowersProvider"
import { DistributorsProvider } from "./distributors/DistributorsProvider"
import { NurseryDistributorsProvider } from "./nurseryDistributors/nurseryDistributorsProvider"
import { DistributorList } from "./distributors/DistributorList"
import { RetailerProvider } from "./retailers/RetailerProvider"
import { RetailerList } from "./retailers/RetailerList"

export const ApplicationViews = () => {
  return (
    <>
      <NurseryDistributorsProvider>
      <DistributorsProvider>
      <NurseryFlowersProvider>
      <FlowerProvider>
      <NurseryProvider>
        <Route exact path="/nurseries">
          <NurseryList />
        </Route>
      </NurseryProvider>
      </FlowerProvider>
      </NurseryFlowersProvider>
      </DistributorsProvider>
      </NurseryDistributorsProvider>

      <RetailerProvider>
      <NurseryFlowersProvider>
      <NurseryDistributorsProvider>
      <FlowerProvider>
      <DistributorsProvider>
        <Route exact path="/distributors">
          <DistributorList />
        </Route>
      </DistributorsProvider>
      </FlowerProvider>
      </NurseryDistributorsProvider>
      </NurseryFlowersProvider>
      </RetailerProvider>

      <FlowerProvider>
      <NurseryFlowersProvider>
      <NurseryProvider>
      <NurseryDistributorsProvider>
      <DistributorsProvider>
      <RetailerProvider>
        <Route exact path="/retailers">
          <RetailerList />
        </Route>
      </RetailerProvider>
      </DistributorsProvider>
      </NurseryDistributorsProvider>
      </NurseryProvider>
      </NurseryFlowersProvider>
      </FlowerProvider>
    </>
  )
}