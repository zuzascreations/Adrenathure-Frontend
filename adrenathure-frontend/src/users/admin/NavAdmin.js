import { Link } from 'react-router-dom'
import '../NavProfile.css'

function NavAdmin() {
  return (
    <div>
      <nav className="nav-profile">
        <Link className="sublink" to="/profile/admin">todas las experiencias</Link>
        <Link className="sublink" to="/profile/admin/allBookings">todas las reservas</Link>
        <Link className="sublink" to="/profile/admin/allPlaces">todos los destinos</Link>
      </nav>
    </div>
  )
}

export default NavAdmin