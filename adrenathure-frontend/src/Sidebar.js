import { Link } from "react-router-dom"
import useFetch from "./useFetch"

function Sidebar() {
  const experiences = useFetch('http://localhost:3000/experiences')
  return experiences && (
    <aside className="sidebar">
      <ul>
        {experiences.map(experiences =>
          <li key={experiences.id}>
            <Link to={'/experiences/' + experiences.id}>
              {experiences.name}
            </Link>
          </li>
        )}
      </ul>
    </aside>
  )
}

export default Sidebar
