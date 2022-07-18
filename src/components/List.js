import React, {  } from "react"

import Rocket from "../assets/icons/Rocket@2x.svg"
import {
  CardContainer,
  CardInfo,
  CardHeader,
  ButtonFlights,
  AsideContainer
} from "./styles/List.styled"

export default function ListComponent({data, tripSelected, setTripSelected}) {

  if(tripSelected){
    document.getElementById('AsideContainer').scrollTo({
      top:document.getElementById(`Trip${tripSelected}`).offsetTop-100,
      behavior:"smooth",
    })
    document.querySelectorAll('.rocket').forEach(rocket => rocket.classList.remove('bounce-3'))
    document.getElementById(`Rocket${tripSelected}`).classList.add("bounce-3")
  }

  return (
    <AsideContainer id="AsideContainer">
      { data.spaceCenters.nodes.map(({ id, name, planet, description }) => (
        <CardContainer 
          key={id}
          id={`Trip${id}`}
          role="listitem"
          // onClick={e => {
            // setTripSelected(id)
          // }}
        >
          <CardInfo>
            <CardHeader>
              <h3>{name}</h3>
              <img src={Rocket} alt="Rocket" id={`Rocket${id}`} className="rocket"/>
            </CardHeader>
            <p><b>{planet.name}</b></p>
            <p>{description}</p>
          </CardInfo>
          <ButtonFlights>SEE ALL FLIGHTS</ButtonFlights>
      </CardContainer>
    ))}
  </AsideContainer>
  )
}