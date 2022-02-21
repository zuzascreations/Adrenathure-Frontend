import { useParams } from "react-router-dom"
import useFetch from "./useFetch"
import Sidebar from "./Sidebar"
import { Suspense } from "react"
import Loading from "./Loading"


function ExperienceId() {
  const { id } = useParams()
  const experienceId = useFetch('http://localhost:3000/experiences/' + id)
  const dates = useFetch('http://localhost:3000/dates/' + id)

  return experienceId && (
    <div className="experience">
      <Sidebar />
      <img className='photoExperience' src={`http://localhost:3000/${experienceId[0].photo}`} alt='foto experiencia'></img>
      <h2>{experienceId[0].experienceName}</h2>
      <span>puntuación: {experienceId[0].AVGVote}</span>
      <p>{experienceId[0].experienceDescription}</p>
      <p>Precio: {experienceId[0].price}€</p>
      <p>Plazas libres: {dates[0].totalSeats}</p>
      <p>Fecha: {dates[0].experienceDate.substring(0, 10)}</p>
      <p>Hora: {dates[0].experienceHour.substring(0, 5)}</p>
    </div>
  )
}

const ExperienceIdWrapper = () =>
  <Suspense fallback={<Loading className='page' />}>
    <ExperienceId />
  </Suspense>


export default ExperienceIdWrapper