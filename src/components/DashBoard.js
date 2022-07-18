import React, { useState } from 'react';

import { gql, useQuery } from '@apollo/client'

import List from './List'
import Map from './Map'
import SearchBar from './SearchBar'

import {
  DashBoard, 
  FlexContainer1, 
  FlexContainer2,
  AsideHeader,
  MapHeader,
  MapContainer,
  FlexW100,
  MapHeaderTitle,
  MapHeaderArrow
} from './styles/Dashboard.styled'

import Arrow from "../assets/icons/Arrow.svg"

export default function DashBoardComponent() {

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

  const [tripSelected, setTripSelected] = useState();

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>

  return (
    <DashBoard>
      <FlexContainer1>
        <AsideHeader>
          <h2>SPACE TRIPS</h2>
        </AsideHeader>
        <List data={data} tripSelected={tripSelected} setTripSelected={setTripSelected}/>
      </FlexContainer1>
      <FlexContainer2>
        <MapHeader>
          <FlexW100>
            <MapHeaderTitle>Departure</MapHeaderTitle>
            <SearchBar/>
            <MapHeaderTitle>Time</MapHeaderTitle>
            <div>0/20/2019 - 12.45am</div>
          </FlexW100>
          <MapHeaderArrow>
            <img src={Arrow} alt="Arrow" />
          </MapHeaderArrow>
        </MapHeader>
          <MapContainer>
            <Map data={data} tripSelected={tripSelected} setTripSelected={setTripSelected}/>
        </MapContainer>
      </FlexContainer2>
    </DashBoard>
  )
}