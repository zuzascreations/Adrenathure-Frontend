import { Link } from 'react-router-dom'
import { useUser } from '../hooks'
import './NavProfile.css'

function NavProfile() {
  const user = useUser()

  return (
    <div className="">
      <nav className="nav-profile">
        <Link className="link" to="/profile">datos personales</Link>
        <Link className="link" to="/profile/bookings">reservas</Link>
        {user.role==='admin' &&
          <Link className="link" to="/profile/admin">administración</Link>
        }
      </nav>
    </div>
  )
}

export default NavProfile