import { Suspense } from 'react'
import Loading from '../Loading'
import useFetch from '../useFetch'
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"

function SidebarExperiencesPlaceId() {
  const { id } = useParams()

  const experiencesPlaceId = useFetch('http://localhost:3000/experiences/place/' + id)

  return experiencesPlaceId && (
    <aside className="experience">
      {experiencesPlaceId.length ?
      <>
      <h3>experiencias en este destino: {experiencesPlaceId.placeName}</h3>
      <ul>
        {experiencesPlaceId.map(i =>
          <li key={i.id}>
            <Link to={'/experiences/' + i.id}>
              {i.experienceName}
            </Link>
          </li>
        )}
      </ul>
      </>
      : <p className='error'>en este momento no hay experiencias asociadas a este destino</p>
    }
    </aside>
  )
}

const SidebarExperiencesPlaceIdWrapper = () =>
  <Suspense fallback={<Loading className="sidebar-experiences-placeId" />}>
    <SidebarExperiencesPlaceId />
  </Suspense>

export default SidebarExperiencesPlaceIdWrapper