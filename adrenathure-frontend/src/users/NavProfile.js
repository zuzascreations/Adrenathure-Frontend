import { Link } from 'react-router-dom'
import { useUser } from '../hooks'
import './NavProfile.css'

function NavProfile() {
  const user = useUser()

  return (
    <div className="all-navProfile">
      <nav className="nav-profile">
        <Link className="link" id='datosPersonales' to="/profile">datos personales</Link>
        <a className="link" href='/profile#bookingsTitleProfile'>reservas</a>
        {user.role==='admin' &&
          <Link className="link" to="/profile/admin">administración</Link>
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