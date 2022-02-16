import { Suspense } from 'react'
import Loading from '../../Loading'
import useFetch from "../../useFetch"
import { Link } from "react-router-dom"

function AllPlaces() {
  const places = useFetch('http://localhost:3000/places')
  return places && (
    <div>
      <ul>
        {places.map(place =>
          <li key={place.id}>
              <p>{place.placeName}</p>
              <button><Link to={"/profile/admin/editPlace/" + place.id }>editar destino</Link></button>
          </li>
        )}
      </ul>
      <button><Link to={"/profile/admin/newPlace"}>añadir nuevo destino</Link>
      </button>
    </div>
  )
}

const AllPlacesWrapper = () =>
  <Suspense fallback={<Loading className='page' />}>
    <AllPlaces />
  </Suspense>

export default AllPlacesWrapper