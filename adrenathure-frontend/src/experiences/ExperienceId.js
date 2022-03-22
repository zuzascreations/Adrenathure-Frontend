import { useParams } from "react-router-dom"
import useFetch from "../useFetch"
import Sidebar from "./Sidebar"
import { Suspense, useEffect, useState } from "react"
import Loading from "../Loading"
import { Link } from 'react-router-dom'
import './ExperienceId.css'


function ExperienceId() {
  const { id } = useParams()
  const [experienceDate, setExperienceDate] = useState('')

  const experienceId = useFetch('http://localhost:3000/experiences/' + id)
  useEffect(() => {
    setExperienceDate(null)
  }, [experienceId])

  return experienceId && (
    <>
    <h2 className="titExp">{experienceId[0].experienceName}</h2>
    <div className="experience">
      <Sidebar />
      <img className='photoExperience' src={`http://localhost:3000/${experienceId[0].experiencePhoto}`} alt='foto experiencia'></img>
      <div className="exp-inside">
        <h2>destino: {experienceId[0].placeName}</h2>
        {'★★★★★☆☆☆☆☆'.substring(5 - experienceId[0].avgVote, 10 - experienceId[0].avgVote)}
        <p>{experienceId[0].experienceDescription}</p>
        <p>precio: {experienceId[0].price}€</p>
        <label>
          {(experienceId[0].experienceDate && experienceId[0].availableSeats > 0) ?
            <>
              <span>fechas disponibles:</span>
              <select defaultValue={'escoge fecha'} onChange={e => {
                setExperienceDate(e.target.value)
              }} name='escoge fecha'>
                <option disabled >escoge fecha</option>
                {experienceId.map(experience =>
                  (experience.availableSeats > 0) &&
                  <option required key={experience.id} name="date" value={experience.experienceDate} >{experience.experienceDate}</option>
                )
                }
              </select>
            </>
            : <p>No hay fechas disponibles</p>}
        </label>
        {experienceDate &&
          <button><Link to={`/experiences/${experienceId[0].id}/${experienceDate}/book`}>RESERVAR</Link></button>}
      </div>
    </div >
    </>
  )
}

const ExperienceIdWrapper = () =>
  <Suspense fallback={<Loading className='page' />}>
    <ExperienceId />
  </Suspense>


export default ExperienceIdWrapper
