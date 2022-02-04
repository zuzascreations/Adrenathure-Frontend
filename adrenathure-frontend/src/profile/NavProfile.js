import { Link } from 'react-router-dom'
import './NavProfile.css'

function NavProfile() {
  return (
    <div>
      <nav className="nav-profile">
        <Link to="/profile">datos personales</Link>
        <Link to="/profile/bookings">reservas</Link>
      </nav>
    </div>
  )
}

export default NavProfile