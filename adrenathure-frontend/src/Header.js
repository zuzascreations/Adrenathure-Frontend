import { Link } from "react-router-dom"
import './Header.css'
import { useEmail } from "./hooks"

function Header() {
    const em = useEmail()
    return(
        <div className='cabecera'>
            <div className="header">
                {/* <h1>ADRENATHURE</h1> */}
                <Link to='/' className="titulo-logo">ADRENATHURE</Link>
                {!em &&
                <Link to='/login' className="clientSpace" >ESPACIO CLIENTE</Link>
                }
                 {em &&
                <Link to="/" className="clientSpace">{em.user}</Link>
                }
            </div>
            <nav>
                <Link to="/users/profile" className="navLinks">Datos Personales:</Link>
                <Link to="/experiences" className='navLinks'>EXPERIENCIAS </Link>
                <Link to="/places"className='navLinks'>DESTINOS</Link>
                <Link to="/about"className='navLinks'>SOBRE NOSOTROS</Link>
                <Link to="/contact" className='navLinks'>CONTACTO</Link>
            </nav>
        </div>
    )
}
export default Header