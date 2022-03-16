import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './Mapcontact.css'

const position= [42.23722017933977, -8.717777402706695]

function MapContact() {
  return(

    <MapContainer className="map contact" center={[42.23722017933977, -8.717777402706695]} zoom={20} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          Adrenathure
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default MapContact