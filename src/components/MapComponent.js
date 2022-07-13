import Map from 'react-map-gl';


export default function MapComponet() {
  return (
    <Map
      initialViewState={{
        position: 'absolute',
        with: '100%',
        height: '100%',
        latitude: 41.579606918652054,
        longitude: 4.244298260567439,
        zoom: 3.5,
        bearing: 0,
        pitch: 0,
        transitionDuration: 1000,
      }}
      style={{width:'100%', height: '100%'}}
      mapStyle="mapbox://styles/mapbox/dark-v8"
    />
  );
}