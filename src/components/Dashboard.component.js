import CardComponent from './CardComponent'
import MapComponent from './MapComponent'
import SearchComponent from './SearchComponent'

import {
  DashBoard, 
  FlexContainer1, 
  FlexContainer2,
  AsideHeader,
  AsideContainer,
  MapHeader,
  MapContainer,
  FlexW100,
  MapHeaderTitle,
  MapHeaderArrow
} from './styles/Dashboard.styled'

import Arrow from "../assets/icons/Arrow.svg"

export default function DashboardComponent() {
  return (
      <DashBoard>
        <FlexContainer1>
          <AsideHeader>
            <h2>SPACE TRIPS</h2>
          </AsideHeader>
            <AsideContainer>
              <CardComponent />
            </AsideContainer>
        </FlexContainer1>
        <FlexContainer2>
          <MapHeader>
            <FlexW100>
              <MapHeaderTitle>Departure</MapHeaderTitle>
              {/* <SearchComponent/> */}
              <MapHeaderTitle>Time</MapHeaderTitle>
              <div>0/20/2019 - 12.45am</div>
            </FlexW100>
            <MapHeaderArrow>
              <img src={Arrow} alt="Arrow" />
            </MapHeaderArrow>
          </MapHeader>
            <MapContainer>
              {/* <MapComponent /> */}
          </MapContainer>
        </FlexContainer2>
      </DashBoard>
  )
}