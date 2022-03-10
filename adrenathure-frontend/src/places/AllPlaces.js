import { Suspense, useState } from 'react'
import Loading from '../Loading'
import useFetch from "../useFetch"
import { Link } from "react-router-dom"
import { useUser } from '../hooks'

function AllPlaces() {
  const [error, setError] = useState(null)
  const user = useUser()

  const places = useFetch('http://localhost:3000/places')

  const handleClick = async (e) => {
    const placeId = e.target.value
    const res = await fetch('http://localhost:3000/places/admin', {
      method: 'DELETE',
      body: JSON.stringify({ placeId }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + user.token
      }
    })
    if (res.ok) {
      // const data = await res.json()
      setError('Deleted successfully')
      window.location.reload(true)
    } else {
      if (res.status === 404) {
        setError('No se ha podido borrar//Error desconocido')
      }
      if (res.status === 500) {
        setError('Hay una experiencia existente en este destino, por favor borra primero la experiencia')
      }
    }
  }
  return places && (
    <div>
      <ul>
        {places.map(place =>
          <li key={place.id}>
              <img className='place-photo' src={`http://localhost:3000/${place.photo}`} alt="avatar" />
              <p>{place.placeName}</p>
              <button><Link to={"/profile/admin/editPlace/" + place.id }>editar destino</Link></button>
              <button value={place.id} onClick={handleClick}>borrar destino</button>
          </li>
        )}
      </ul>
      {error && <div className="error">{error}</div>}
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