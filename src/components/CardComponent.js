import { gql, useQuery } from '@apollo/client'

import Rocket from "../assets/icons/Rocket@2x.svg"
import {
  CardContainer,
  CardInfo,
  CardHeader,
  ButtonFlights
} from "./styles/Card.styled copy"

export default function CardComponent() {

  const GET_LOCATIONS = gql`
  query {
      spaceCenters {
        nodes{
          id
          name
          description
          planet{
            name
          }
        }
      }
    }
  `
    const { loading, error, data } = useQuery(GET_LOCATIONS)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error</p>

    return data.spaceCenters.nodes.map(({ id, name, planet, description }) => (
      <CardContainer>
        <CardInfo>
          <CardHeader>
            <h3>{name}</h3>
            <img src={Rocket} alt="Rocket" />
          </CardHeader>
          <b>{planet.name}</b>
          <br/>
          <br/>
          <div>{description}</div>
          <br/>
        </CardInfo>
        <ButtonFlights>SEE ALL FLIGHTS</ButtonFlights>
      </CardContainer>
    ))
}