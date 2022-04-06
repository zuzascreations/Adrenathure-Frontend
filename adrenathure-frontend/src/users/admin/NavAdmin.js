import { Link } from 'react-router-dom'
import '../NavProfile.css'

function NavAdmin() {
  return (
    <div>
      <nav className="nav-profile">
        <Link className="sublink" to="/profile/admin#allexperiences">TODAS LAS EXPERIENCIAS</Link>
        <Link className="sublink" to="/profile/admin/allPlaces#allPlaces">TODOS LOS DESTINOS</Link>
        <Link className="sublink" to="/profile/admin/allBookings#todasReservas">TODAS LAS RESERVAS</Link>
      </nav>
    </div>
  )
}

export default NavAdmin
