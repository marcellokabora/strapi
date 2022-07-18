import {useState} from 'react'

import Map, { 
  Marker, 
  FullscreenControl, 
  NavigationControl, 
  Popup,
  GeolocateControl,
} from 'react-map-gl'

import MarkerYellow from "../assets/icons/Pointer@2x.svg"
import MarkerSelected from "../assets/icons/Pointer_selected@2x.svg"
import DarkEnergy from "../assets/images/darkenergy.jpg"
import 'mapbox-gl/dist/mapbox-gl.css'

export default function MapComponet({data, tripSelected, setTripSelected}) {

  const [popupInfo, setPopupInfo] = useState(null)

  if (tripSelected ){
    console.log(tripSelected);
  }

  return (
    <Map
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      initialViewState={{
        position: 'absolute',
        with: '100%',
        height: '100%',
        latitude: 41.579606918652054,
        longitude: 4.244298260567439,
        zoom: 2,
        bearing: 0,
        pitch: 0,
        transitionDuration: 1000,
      }}
      style={{width:'100%', height: '100%'}}
      mapStyle="mapbox://styles/mapbox/dark-v9"
    >
      <FullscreenControl />
      <NavigationControl />
      <GeolocateControl/>
      
      {data.spaceCenters.nodes.map(marker => (
        <Marker key={marker.id}
          latitude={marker.latitude}
          longitude={marker.longitude}
          anchor="bottom"
          onClick={e => {
            e.originalEvent.stopPropagation();
            setTripSelected(marker.id)
            setPopupInfo(marker);
          }}
        >
          <img src={marker.id===popupInfo?.id ? MarkerSelected : MarkerYellow} alt="MarkerYellow"/>
        </Marker>
      ))}

      {popupInfo && (
        <Popup
          anchor="bottom"
          longitude={Number(popupInfo.longitude)}
          latitude={Number(popupInfo.latitude)}
          onClose={() => setPopupInfo(null)}
          offset={55}
        >
          <div style={{
            backgroundColor: 'black',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
          }}>
            <img src={DarkEnergy} alt="DarkEnergy" width={'100%'}/>
            <div style={{
              padding: '10px',
              textAlign: 'center'
            }}>
              {popupInfo.name}
            </div>
          </div>
        </Popup>
      )}

    </Map>
  );
}

