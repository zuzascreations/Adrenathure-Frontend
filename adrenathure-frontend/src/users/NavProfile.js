import { Link } from 'react-router-dom'
import { useUser } from '../hooks'
import './NavProfile.css'

function NavProfile() {
  const user = useUser()

  return (
    <div className="all-navProfile">
      <nav className="nav-profile">
        <Link className="nav-link" to="/profile#datos">DATOS PERSONALES</Link>
        <Link className="nav-link" to='/profile#bookingsTitleProfile'>RESERVAS</Link>
        {user.role === 'admin' &&
          <Link className="nav-link" to="/profile/admin#allexperiences">ADMINISTRACIÓN</Link>
        }
      </nav>
    </div>
  )
}

export default NavProfile
