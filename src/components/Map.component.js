import {Map, Marker} from 'react-map-gl';
import { gql, useQuery } from '@apollo/client'

import MarkerYellow from "../assets/icons/Pointer@2x.svg"


export default function MapComponet() {
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

  console.log(data);

  return (
    <Map
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      initialViewState={{
        position: 'absolute',
        with: '100%',
        height: '100%',
        latitude: 41.579606918652054,
        longitude: 4.244298260567439,
        zoom: 6,
        bearing: 0,
        pitch: 0,
        transitionDuration: 1000,
      }}
      style={{width:'100%', height: '100%'}}
      mapStyle="mapbox://styles/mapbox/dark-v9"
    >
      {data.spaceCenters.nodes.map(marker => (
        <Marker key={marker.id}
          latitude={marker.latitude}
          longitude={marker.longitude}>
            <button style={{
              cursor: 'pointer',
              background: 'none',
              border: 'none'
            }}>
              <img width={20} height={20} src={MarkerYellow} alt="Marker" />
            </button>
        </Marker>)
      )}
    </Map>
  );
}

