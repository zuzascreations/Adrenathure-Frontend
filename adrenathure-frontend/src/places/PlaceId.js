import { Suspense } from 'react'
import Loading from '../Loading'
import useFetch from 'fetch-suspense'
import { useParams } from "react-router-dom"
import ErrorBoundary from '../ErrorBoundary'
import './Place.css'
import SidebarExperiencesPlaceIdWrapper from './SidebarExperiencesPlaceId'

function PlaceId() {
  const { id } = useParams()
  const placeId = useFetch('http://localhost:3000/places/' + id)
  return placeId && (
    <div className="space-place">
      <div className="space-photo">
        <img className='photo-place' src={`http://localhost:3000/${placeId.photo}`} alt='foto experiencia'></img>
      </div>
      <div className="space-content">
        <h2 className="place-title">{placeId.placeName}</h2>
        <p className="place-text">{placeId.placeDescription}</p>
        <SidebarExperiencesPlaceIdWrapper />
      </div>
    </div>
  )
}

const PlaceIdWrapper = () =>
  <Suspense fallback={<Loading className="page" />}>
    <ErrorBoundary fallback="Bookings is failing">
      <PlaceId />
    </ErrorBoundary>
  </Suspense>

export default PlaceIdWrapper