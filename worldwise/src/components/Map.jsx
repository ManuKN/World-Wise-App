import { useNavigate, useSearchParams } from 'react-router-dom'
import styles from './Map.module.css'
import { MapContainer, TileLayer, Marker , Popup } from 'react-leaflet'
import { useState } from 'react'
import { useCitiesPath } from '../Contexts/CitiesProvider'

function Map() {
  /* eslint-disable */
const[searchParams , setSearchParams] = useSearchParams()

const maplng = searchParams.get("lng")
const maplat = searchParams.get("lat")
/* eslint-disable */
const[mapPosition , setMapPosition] = useState([40,0])
const navigate = useNavigate()
const{cities} = useCitiesPath();

  return (
    <div className={styles.mapContainer} >
      <MapContainer center={[maplng , maplat]} zoom={13} scrollWheelZoom={true} className={styles.map}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
    />
    {cities.map((city)=>( <Marker position={[city.position.lat , city.position.lng]}>
      <Popup>
       <span>{city.emoji}</span><h3>{city.cityName}</h3>
      </Popup>
    </Marker>))}
  </MapContainer>
        {/* <h1>Map</h1>
        <h1>Position :{lat} , {lng}</h1>
        <button onClick={() => setSearchParams({lat:23 , lng:40})}>Change Position</button> */}
    </div>
  )
}

export default Map