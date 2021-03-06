import { Link } from "react-router-dom"
import { useSetRegister, useSetUser, useUser } from "./hooks"
import './Header.css'
import CarouselSlick from "./CarouselSlick"


function Header() {
  const user = useUser()
  const setUser = useSetUser()
  const setRegistered = useSetRegister()
  return (
    <div className="allHeader">
      <div className="transparencia">
        <div className="header">
          <div className="rrss">
            <a href='http://www.twitter.com' target='_blank' rel="noreferrer"><img src="https://global-uploads.webflow.com/5f3108520188e7588ef687b1/5f58a208666f7b5d1a711143_twitter-circular-logo.svg" alt="logo twitter" className="rrss-header" /></a>
            <a href='http://www.instagram.com' target='_blank' rel="noreferrer"><img src="https://global-uploads.webflow.com/5f3108520188e7588ef687b1/5f58a21b3b98e1679a71fb14_instagram-circular-logo.svg" alt="logo instagram" className="rrss-header" /></a>
            <a href='http://www.facebook.com' target='_blank' rel="noreferrer"><img src="https://global-uploads.webflow.com/5f3108520188e7588ef687b1/5f58a2361e897958db045d2e_facebook-circular-logo.svg" alt="logo facebook" className="rrss-header" /></a>
            <a href='http://www.linkedin.com' target='_blank' rel="noreferrer"><img src="https://global-uploads.webflow.com/5f3108520188e7588ef687b1/5f58a2299a0e417966e9013d_linkedin-circular-logo.svg" alt="logo linkedin" className="rrss-header" /></a>
          </div>
          <div className="title"><Link to='/' className="title">adrenathure</Link></div>
          <nav id="navMenu">
            <input type="checkbox" id="menu" />
            <label className="menuLabel" for="menu"> ☰ </label>
            {!user &&
              <span className='buttonUsername'> ESPACIO CLIENTE </span>}
            {user &&
              <span className='buttonUsername'> {user.user} </span>}
            <ul className="ulMenu">
            {user &&
              <li className="liMenu"><Link className="logout" to={'/Profile#datos'}>Perfil</Link></li>}
              <li className="liMenu">{user &&
                <Link className="logout" to={'/'} onClick={() => {
                  setRegistered(false)
                  setUser(null)
                }}>Salir</Link>}
                {!user &&
                  <Link className="logout" to={'/login#divLogin'}>Iniciar sesión</Link>
                }
              </li>
            </ul>
          </nav>
        </div>
        <nav id="header-nav">
          <Link to="/experiences#experiences" className='navLinks'>EXPERIENCIAS </Link>
          <Link to="/places#places" className='navLinks'>DESTINOS</Link>
          <Link to="/about#portada-body" className='navLinks'>SOBRE NOSOTROS</Link>
          <Link to="/contact#contact" className='navLinks'>CONTACTO</Link>
        </nav>
        <div id="carousel">
          <CarouselSlick />
        </div>
      </div>
    </div>
  )
}
export default Header
