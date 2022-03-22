import { Link } from 'react-router-dom'
import '../NavProfile.css'

function NavAdmin() {
  return (
    <div>
      <nav className="nav-profile">
        <Link className="sublink" to="/profile/admin">TODAS LAS EXPERIENCIAS</Link>
        <Link className="sublink" to="/profile/admin/allBookings">TODAS LAS RESERVAS</Link>
        <Link className="sublink" to="/profile/admin/allPlaces">TODOS LOS DESTINOS</Link>
      </nav>
    </div>
  )
}

export default NavAdmin
