import { Suspense, useState } from 'react'
import Loading from '../Loading'
import useFetch from "../useFetch"
import { Link } from "react-router-dom"
import { useSetModal, useUser } from '../hooks'

function AllExperiences() {
  const setModal = useSetModal()
  const user = useUser()
  const [error, setError] = useState(null)
  const experiences = useFetch('http://localhost:3000/experiences')

  const handleClick = async (e) => {
    const expId = e.target.value
    const res = await fetch('http://localhost:3000/experiences/admin', {
      method: 'DELETE',
      body: JSON.stringify({ expId }),
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
        setModal(<><p>'No se ha podido borrar//Error desconocido'</p><button onClick={() => setModal(null)}>volver</button></>)

      }
    }
  }

  return experiences && (
    <div>
      <ul>
        {experiences.map(experience =>
            <li key={experience.id}>
              <img className='photo-edit' src={`http://localhost:3000/${experience.experiencePhoto}`} alt="avatar" />
              <p>nombre: {experience.experienceName}</p>
              <p>precio: {experience.price}€</p>
              <p>destino: {experience.placeName}</p>
              <button><Link className="link" to={"/profile/admin/editExperience/" + experience.id}>editar experiencia</Link></button>
              <button value={experience.id} onClick={handleClick}>BARRAR EXPERIENCIA</button>
            </li>
        )}
        {/* {error && <div className="error">{error}</div>} */}
      </ul>
      <button><Link className="link" to={"/profile/admin/newExperience"}>AÑADIR NUEVA EXPERIENCIA</Link>
      </button>
    </div>
  )
}

const AllExperiencesWrapper = () =>
  <Suspense fallback={<Loading className='page' />}>
    <AllExperiences />
  </Suspense>

export default AllExperiencesWrapper
