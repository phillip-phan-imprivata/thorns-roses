import React from "react"
import { Route } from "react-router-dom"
import { NurseryProvider } from "./nurseries/NurseryProvider"
import { NurseryList } from "./nurseries/NurseryList"
import { FlowerProvider } from "./flowers/FlowerProvider"
import { NurseryFlowersProvider } from "./nurseryFlowers/nurseryFlowersProvider"
import { DistributorsProvider } from "./distributors/DistributorsProvider"
import { NurseryDistributorsProvider } from "./nurseryDistributors/nurseryDistributorsProvider"

export const ApplicationViews = () => {
  return (
    <>
      <Route exact path="/nurseries">
        <NurseryDistributorsProvider>
        <DistributorsProvider>
        <NurseryFlowersProvider>
        <FlowerProvider>
        <NurseryProvider>
          <NurseryList />
        </NurseryProvider>
        </FlowerProvider>
        </NurseryFlowersProvider>
        </DistributorsProvider>
        </NurseryDistributorsProvider>
      </Route>

      <Route exact path="/distributors">
        <></>
      </Route>

      <Route exact path="/retailers">
        <></>
      </Route>
    </>
  )
}