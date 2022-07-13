import { gql, useQuery } from '@apollo/client'

import Rocket from "../assets/icons/Rocket@2x.svg"

export default function CardComponent() {

  const GET_LOCATIONS = gql`
  query {
      spaceCenters {
        nodes{
          id
          name
          latitude
          longitude
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

    return data?.spaceCenters.nodes.map(({ id, name, planet }) => (
      <div key={id} style={{
            margin: '40px 20px',
            boxShadow: '0px 0px 5px #8C8C8C'
      }}>
        <div style={{
          padding: '20px'
          }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <h3>{name}</h3>
            <img src={Rocket} alt="Rocket" />
          </div>
          <div>{planet.name}</div>
          <br/>
          <div>12 departure planned today</div>
          <br/>
        </div>
        <button style={{
          background: 'black',
          color: 'silver',
          textAlign: 'center',
          padding: '15px 10px',
          fontSize: 12,
          fontWeight: 'light',
          width: '100%',
          cursor: 'pointer'
        }}>SEE ALL FLIGHTS</button>
      </div>
    ))
}