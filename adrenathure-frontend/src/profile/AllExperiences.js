import { Suspense } from 'react'
import Loading from '../Loading'
import useFetch from "../useFetch"
import { Link } from "react-router-dom"

function AllExperiences() {
  const experiences = useFetch('http://localhost:3000/experiences')
  return experiences && (
    <div>
      <ul>
        {experiences.map(experience =>
          <li key={experience.id}>
              <p>{experience.experienceName}</p>
              <p>{experience.experienceDate.substring(0, 10)}</p>
              <p>{experience.price}</p>
              <p>{experience.totalSeats}</p>
              <p>{experience.photo}</p>
              <p>{experience.place_id}</p>
              <button><Link to={"/profile/admin/editExperience/" + experience.id }>editar experiencia</Link></button>

          </li>
        )}
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