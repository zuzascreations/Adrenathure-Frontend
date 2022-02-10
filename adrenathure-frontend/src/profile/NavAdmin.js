import { Link } from 'react-router-dom'

function NavAdmin() {
  return (
    <div>
      <nav>
        <Link to="/profile/admin/newExperience">crear nueva experiencia</Link>
        <Link to="/profile/admin/allBookings">todas las reservas</Link>

      </nav>
    </div>
  )
}

export default NavAdmin