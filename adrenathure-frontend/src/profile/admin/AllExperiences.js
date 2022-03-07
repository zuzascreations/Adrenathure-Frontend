import { Suspense, useState } from 'react'
import Loading from '../../Loading'
import useFetch from "../../useFetch"
import { Link } from "react-router-dom"
import { useUser } from '../../hooks'

function AllExperiences() {

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
      setError('Deleted successfully')
      window.location.reload(true)
    } else {
      if (res.status === 404) {
        setError('No se ha podido borrar//Error desconocido')

      }
    }
  }

  return experiences && (
    <div>
      <ul>
        {experiences.map(experience =>
          <>
            <li key={experience.id}>
              <img className='experience-photo' src={`http://localhost:3000/${experience.photo}`} alt="avatar" />
              <p>nombre: {experience.experienceName}</p>
              <p>destino: {experience.placeName}</p>
              <p>precio: {experience.price}€</p>
              <button><Link to={"/profile/admin/editExperience/" + experience.id}>editar experiencia</Link></button>
              <button value={experience.id} onClick={handleClick}>borrar experiencia</button>
            </li>
          </>
        )}
        {error && <div className="error">{error}</div>}
      </ul>
      <button><Link to={"/profile/admin/newExperience"}>añadir nueva experiencia</Link>
      </button>
    </div>
  )
}

const AllExperiencesWrapper = () =>
  <Suspense fallback={<Loading className='page' />}>
    <AllExperiences />
  </Suspense>

export default AllExperiencesWrapper