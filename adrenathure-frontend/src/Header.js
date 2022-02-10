import { Link } from "react-router-dom"
import { useSetUser, useUser } from "./hooks"
import './Header.css'


function Header() {
 
  const user = useUser()
  const setUser = useSetUser()
  return (
    <div className="allHeader">
      <div className="transparencia">
      <div className="header">
        <div></div>
        <Link to='/' className="title">adrenathure</Link>
        <div className="dropdown">
          {!user &&
            <button className='buttonUsername'>espacio cliente</button>}
          {user &&
            <button className='buttonUsername'>{user.user}</button>}
            <div className="dropdown-content">
            <Link to={'/Profile'}>Mi Perfil</Link>
            {user &&
            <Link to={'/'} onClick={() => setUser(null)}>Cerrar Sesion</Link>}
            {!user &&
            <Link to={'/login'}>iniciar sesión</Link>
            }
            </div>
          </div>
        {/* {!user &&
          <Link to='/login' className="clientSpace" >espacio cliente</Link>
        }
        {user &&
          <>
            <Link to="/profile" className="clientSpace">{user.user}</Link> */}
            {/* <span className="logout"onClick={() => dispatch({ type: 'logout' })}>salir</span> */}
          {/* </> */}
        {/* } */}
      </div>
      <nav>
        <Link to="/experiences" className='navLinks'>experiences </Link>
        <Link to="/places" className='navLinks'>destinos</Link>
        <Link to="/about" className='navLinks'>sobre nosotros</Link>
        <Link to="/contact" className='navLinks'>contacto</Link>
      </nav>
      </div>
    </div>
  )
}
export default Header