import { useParams } from "react-router-dom"
import useFetch from "./useFetch"
import Sidebar from "./Sidebar"
import { Suspense } from "react"
import Loading from "./Loading"


function ExperienceId() {
  const { id } = useParams()
  const experienceId = useFetch('http://localhost:3000/experiences/' + id)
  console.log(experienceId)
  return experienceId && (
    <div className="experience">
        <Sidebar />
        <img src={experienceId[0].photo} alt="City"/>
        <h2>{experienceId[0].experienceName}</h2>
        <span>puntuación: {experienceId[0].AVGVote}</span>
        <p>{experienceId[0].experienceDescription}</p>
        <p>Precio: {experienceId[0].price}€</p>
        <p>Plazas libres: {experienceId[0].totalSeats}</p>
        <p>Fecha: {experienceId[0].experienceDate}</p>
        <p>Hora: {experienceId[0].experienceHour}</p>
    </div>
  )
}

const ExperienceIdWrapper = () =>
  <Suspense fallback={<Loading className='page' />}>
    <ExperienceId />
  </Suspense>


export default ExperienceIdWrapper