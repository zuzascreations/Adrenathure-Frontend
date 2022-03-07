import { useParams } from "react-router-dom"
import useFetch from "./useFetch"
import Sidebar from "./Sidebar"
import { Suspense, useState } from "react"
import Loading from "./Loading"
import { Link } from 'react-router-dom'


function ExperienceId() {
  const { id } = useParams()
  const [experienceDate, setExperienceDate] = useState('')

  const experienceId = useFetch('http://localhost:3000/experiences/' + id)

  return experienceId && (
    <div className="experience">
      <Sidebar />
      <img className='photoExperience' src={`http://localhost:3000/${experienceId[0].experiencePhoto}`} alt='foto experiencia'></img>
      <h2>experiencia: {experienceId[0].experienceName}</h2>
      <h2>destino: {experienceId[0].placeName}</h2>
      <span>puntuación: {experienceId[0].AVGVote}</span>
      <p>{experienceId[0].experienceDescription}</p>
      <p>precio: {experienceId[0].price}€</p>
      <label>
        <span>fecha:</span>
        <select onChange={e => setExperienceDate(e.target.value)} name='escoge fecha'>
          <option disabled selected >fechas disponibles</option>
          {experienceId.map(experience =>
              (experience.availableSeats > 0) &&
                <option required key={experience.id} name="date" value={experience.experienceDate.substring(0,10)} >{experience.experienceDate.substring(0,10)}</option>
            )
          }
        </select>
      </label>
      <button><Link to={`/experiences/${experienceId[0].id}/${experienceDate}/book`}>reservar</Link></button>
    </div>
  )
}

const ExperienceIdWrapper = () =>
  <Suspense fallback={<Loading className='page' />}>
    <ExperienceId />
  </Suspense>


export default ExperienceIdWrapper