import { Link } from 'react-router-dom'
import { useUser } from '../hooks'
import './NavProfile.css'

function NavProfile() {
  const user = useUser()
  
  return (
    <div>
      <nav className="nav-profile">
        <Link to="/profile">datos personales</Link>
        <Link to="/profile/bookings">reservas</Link>
        {user.role==='admin' &&
          <Link to="/profile/admin">administración</Link>
        }
      </nav>
    </div>
  )
}

export default NavProfile