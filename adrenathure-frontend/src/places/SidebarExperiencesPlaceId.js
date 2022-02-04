import { Suspense } from 'react'
import Loading from '../Loading'
import useFetch from 'fetch-suspense'
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"

function SidebarExperiencesPlaceId() {
  const { id } = useParams()
  const experiencesPlaceId = useFetch('http://localhost:3000/experiences/place/' + id)
  return experiencesPlaceId && (
    <aside className="experience">
      <ul>
        {experiencesPlaceId.map(i =>
          <li key={i.id}>
            <Link to={'/experiences/' + i.id}>
              {i.experienceName}
            </Link>
          </li>
        )}
      </ul>
    </aside>
  )
}

const SidebarExperiencesPlaceIdWrapper = () =>
  <Suspense fallback={<Loading className="sidebar-experiences-placeId" />}>
    <SidebarExperiencesPlaceId />
  </Suspense>

export default SidebarExperiencesPlaceIdWrapper