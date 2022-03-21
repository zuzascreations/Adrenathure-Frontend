import { Suspense } from 'react'
import Loading from '../Loading'
import useFetch from 'fetch-suspense'
import { Link } from "react-router-dom"


function SidebarPlaces() {
  const places = useFetch('http://localhost:3000/places')
  return places && (
    <aside className="places">
      <ul>
        { places.length ?
        places.map(place =>
          <li key={place.id}>
            <Link to={'/places/' + place.id}>
              {place.placeName}
            </Link>
          </li>
        ): <p>aun no hay destinos disponibles, disculpa las molestias.</p>}
      </ul>
    </aside>
  )
}

const SidebarPlacesWrapper = () =>
  <Suspense fallback={<Loading className="page" />}>
    <SidebarPlaces />
  </Suspense>

export default SidebarPlacesWrapper
