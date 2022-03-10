import { Suspense } from 'react'
import Loading from '../Loading'
import useFetch from 'fetch-suspense'
import { useParams } from "react-router-dom"
import ErrorBoundary from '../ErrorBoundary'

function PlaceId() {
  const { id } = useParams()
  const placeId = useFetch('http://localhost:3000/places/' + id)
  return placeId && (
    <div className="place-id">
      <img className='photoExperience' src={`http://localhost:3000/${placeId.photo}`} alt='foto experiencia'></img>
      <h2>{placeId.placeName}</h2>
      <p>{placeId.placeDescription}</p>
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