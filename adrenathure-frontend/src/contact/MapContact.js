import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './Mapcontact.css'

<MapContainer center={[42.23722017933977, -8.717777402706695]} zoom={12} scrollWheelZoom={true}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[42.23722017933977, -8.717777402706695]}>
    <Popup>
        
    </Popup>
  </Marker>
</MapContainer>

export default MapContainer