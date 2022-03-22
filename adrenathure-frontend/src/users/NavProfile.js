import { Link } from 'react-router-dom'
import { useUser } from '../hooks'
import './NavProfile.css'

function NavProfile() {
  const user = useUser()

  return (
    <div className="">
      <nav className="nav-profile">
        <Link className="link" to="/profile">DATOS PERSONALES</Link>
        <Link className="link" to="/profile/bookings">RESERVAS</Link>
        {user.role==='admin' &&
          <Link className="link" to="/profile/admin">ADMINISTRACIÓN</Link>
        }
      </nav>
    </div>
  )
}

export default NavProfile
