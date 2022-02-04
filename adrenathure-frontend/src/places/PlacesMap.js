import { Suspense } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Loading from './Loading'
import './PokeMap.css'
import useFetch from './useFetch'

function PokeMap() {
  const pokeparadas = useFetch('https://run.mocky.io/v3/9c4bcdd6-751e-46fd-9378-82ec8869fb5a')

  return (
    <MapContainer center={[42.210987, -8.710830]} zoom={12}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {pokeparadas.map(parada =>
        <Marker position={parada.coords}>
          <Popup>
            {parada.title}
          </Popup>
        </Marker>
      )}
    </MapContainer>
  )
}

const PokeMapWrapper = () =>
  <Suspense fallback={<Loading />}>
    <PokeMap />
  </Suspense>

export default PokeMapWrapper