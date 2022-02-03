import { Link } from "react-router-dom"
import { useUser } from "./hooks"
import './Header.css'

function Header() {
  const user = useUser()
  console.log(user)
  return (
    <div>
      <div className="header">
        <Link to='/' className="title">adrenathure</Link>
        {!user &&
          <Link to='/login' className="clientSpace" >espacio cliente</Link>
        }
        {user &&
          <Link to="/" className="clientSpace">{user.user}</Link>
        }
      </div>
      <nav>
        <Link to="/users/profile" className="navLinks">datos personales:</Link>
        <Link to="/experiences" className='navLinks'>experiences </Link>
        <Link to="/places" className='navLinks'>destinos</Link>
        <Link to="/about" className='navLinks'>sobre nosotros</Link>
        <Link to="/contact" className='navLinks'>contacto</Link>
      </nav>
    </div>
  )
}
export default Header