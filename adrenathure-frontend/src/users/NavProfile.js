import { Link } from 'react-router-dom'
import { useUser } from '../hooks'
import './NavProfile.css'

function NavProfile() {
  const user = useUser()

  return (
    <div className="all-navProfile">
      <nav className="nav-profile">
        <Link className="nav-link" to="/profile">DATOS PERSONALES</Link>
        <a className="nav-link" href='/profile#bookingsTitleProfile'>RESERVAS</a>
        {user.role === 'admin' &&
          <Link className="nav-link" to="/profile/admin">ADMINISTRACIÓN</Link>
        }
      </nav>
    </div>
  )
}

export default NavProfile
