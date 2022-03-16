import { Suspense } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Loading from '../Loading'
import './PlacesMap.css'
import useFetch from 'fetch-suspense'
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

function PlacesMap() {
  const { id } = useParams()
  const places = useFetch('http://localhost:3000/places/')
  const position = ""

  return (
    <MapContainer id="placesMap"center={[40.4310754, -3.7028892]} zoom={6}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png"/>
      {places.map(place =>
        <Marker key={place.id} position={ [place.coordsLong, place.coordsLat] }>
          <Popup>
            <Link to= {'/places/' + id}>{place.placeName}</Link>
          </Popup>
        </Marker>)}
    </MapContainer>
  )
}

const PlacesMapWrapper = () =>
  <Suspense fallback={<Loading />}>
    <PlacesMap />
  </Suspense>

export default PlacesMapWrapper