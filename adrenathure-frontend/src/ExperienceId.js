import { useParams } from "react-router-dom"
import useFetch from "./useFetch"
import Sidebar from "./Sidebar"
import { Suspense } from "react"
import Loading from "./Loading"
import { Link } from 'react-router-dom'


function ExperienceId() {
  const { id } = useParams()
  const experienceId = useFetch('http://localhost:3000/experiences/' + id)
  const dates = useFetch('http://localhost:3000/dates/' + id)

  return experienceId && (
    <div className="experience">
      <Sidebar />
      <img className='photoExperience' src={`http://localhost:3000/${experienceId[0].photo}`} alt='foto experiencia'></img>
      <h2>experiencia: {experienceId[0].experienceName}</h2>
      <h2>destino: {experienceId[0].place_id}</h2>
      <span>puntuación: {experienceId[0].AVGVote}</span>
      <p>{experienceId[0].experienceDescription}</p>
      <p>precio: {experienceId[0].price}€</p>
      <p>plazas libres: {dates[0].totalSeats}</p>
      <p>fecha: {dates[0].experienceDate.substring(0, 10)}</p>
      <p>hora: {dates[0].experienceHour.substring(0, 5)}</p>
      <button><Link to="/experiences/:id/book">reservar</Link></button>
    </div>
  )
}

const ExperienceIdWrapper = () =>
  <Suspense fallback={<Loading className='page' />}>
    <ExperienceId />
  </Suspense>


export default ExperienceIdWrapper