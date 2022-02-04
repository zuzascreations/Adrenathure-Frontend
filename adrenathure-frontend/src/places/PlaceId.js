import { Suspense } from 'react'
import Loading from '../Loading'
import useFetch from 'fetch-suspense'
import { useParams } from "react-router-dom"

function PlaceId() {
  const { id } = useParams()
  const placeId = useFetch('http://localhost:3000/places/' + id)
  return placeId && (
    <div className="place-id">
      <img src={placeId.photo} alt="City" />
      <h2>{placeId.placeName}</h2>
      <p>{placeId.placeDescription}</p>
    </div>
  )
}

const PlaceIdWrapper = () =>
  <Suspense fallback={<Loading className="page" />}>
    <PlaceId />
  </Suspense>

export default PlaceIdWrapper