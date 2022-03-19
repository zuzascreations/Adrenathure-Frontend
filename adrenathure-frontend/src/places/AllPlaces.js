import { Suspense } from 'react'
import Loading from '../Loading'
import useFetch from "../useFetch"
import { Link } from "react-router-dom"
import { useSetModal, useUser } from '../hooks'
import './Allplaces.css'

function AllPlaces() {
  const user = useUser()
  const setModal = useSetModal()

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
      setModal('Deleted successfully')
      window.location.reload(true)
    } else {
      if (res.status === 404) {
        setModal('No se ha podido borrar//Error desconocido')
      }
      if (res.status === 500) {
        setModal('Hay una experiencia existente en este destino, por favor borra primero la experiencia')
      }
    }
  }
  return places && (
    <div className="all-places">
      <ul>
        {places.map(place =>
          <li key={place.id}>
            <img className='place-photo' src={`http://localhost:3000/${place.photo}`} alt="avatar" />
            <p>{place.placeName}</p>
            <button><Link className="link" to={"/profile/admin/editPlace/" + place.id}>editar destino</Link></button>
            <button value={place.id} onClick={handleClick}>borrar destino</button>
          </li>
        )}
      </ul>
      <button><Link className="link" to={"/profile/admin/newPlace"}>añadir nuevo destino</Link></button>
    </div>
  )
}

const AllPlacesWrapper = () =>
  <Suspense fallback={<Loading className='page' />}>
    <AllPlaces />
  </Suspense>

export default AllPlacesWrapper