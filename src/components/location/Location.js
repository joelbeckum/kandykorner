import React from "react"
import "./Location.css"

export const Location = ({ location }) => (
    <section className="location">
        <h3 className="location__address">{location.address}</h3>
    </section>
)