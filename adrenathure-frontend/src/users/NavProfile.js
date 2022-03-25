import { Link } from 'react-router-dom'
import { useUser } from '../hooks'
import './NavProfile.css'

function NavProfile() {
  const user = useUser()

  return (
    <div className="all-navProfile">
      <nav className="nav-profile">
        <Link className="nav-link" to="/profile">DATOS PERSONALES</Link>
        <Link className="nav-link" to="/profile/bookings">RESERVAS</Link>
        {user.role==='admin' &&
          <Link className="nav-link" to="/profile/admin">ADMINISTRACIÓN</Link>
        }
      </nav>
    </div>
  )
}

export default NavProfile

{/* <p  className="link" onClick={() => {
          document.querySelector('#bookingsTitleProfile').scrollIntoView()
        }}>reservas</p> */}

        // <a className="link" href='#bookingsTitleProfile'>reservas</a>
