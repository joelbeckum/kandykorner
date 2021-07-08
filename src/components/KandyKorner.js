import React from "react"
import { LocationProvider } from "./location/LocationProvider"
import { LocationList } from "./location/LocationList"
import "./KandyKorner.css"

export const KandyKorner = () => (
    <>
        <LocationProvider>
            <LocationList />
        </LocationProvider>
    </>
)