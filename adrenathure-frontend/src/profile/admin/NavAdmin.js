import { Link } from 'react-router-dom'

function NavAdmin() {
  return (
    <div>
      <nav>
        <Link to="/profile/admin">todas las experiencias</Link>
        <Link to="/profile/admin/allBookings">todas las reservas</Link>
        <Link to="/profile/admin/allPlaces">todos los places</Link>
      </nav>
    </div>
  )
}

export default NavAdmin