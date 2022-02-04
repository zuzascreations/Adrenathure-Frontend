import { Link } from "react-router-dom"
import { useUser } from "./hooks"
import './Header.css'
import { useDispatch } from "react-redux"

function Header() {
  const dispatch = useDispatch()
  const user = useUser()
  return (
    <div>
      <div className="header">
        <Link to='/' className="title">adrenathure</Link>
        {!user &&
          <Link to='/login' className="clientSpace" >espacio cliente</Link>
        }
        {user &&
          <>
            <Link to="/profile" className="clientSpace">{user.user}</Link>
            <span class="logout" className="logout"onClick={() => dispatch({ type: 'logout' })}>salir</span>
          </>
        }
      </div>
      <nav>
        <Link to="/experiences" className='navLinks'>experiences </Link>
        <Link to="/places" className='navLinks'>destinos</Link>
        <Link to="/about" className='navLinks'>sobre nosotros</Link>
        <Link to="/contact" className='navLinks'>contacto</Link>
      </nav>
    </div>
  )
}
export default Header