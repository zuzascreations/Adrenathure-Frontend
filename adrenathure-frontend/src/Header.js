import { Link } from "react-router-dom"
import { useSetRegister, useSetUser, useUser } from "./hooks"
import './Header2.css'
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
            <a href='http://www.twitter.com' target='_blank' rel="noreferrer"><img src="https://global-uploads.webflow.com/5f3108520188e7588ef687b1/5f58a208666f7b5d1a711143_twitter-circular-logo.svg" alt="logo twitter" className="rrss-selector" /></a>
            <a href='http://www.instagram.com' target='_blank' rel="noreferrer"><img src="https://global-uploads.webflow.com/5f3108520188e7588ef687b1/5f58a21b3b98e1679a71fb14_instagram-circular-logo.svg" alt="logo instagram" className="rrss-selector" /></a>
            <a href='http://www.facebook.com' target='_blank' rel="noreferrer"><img src="https://global-uploads.webflow.com/5f3108520188e7588ef687b1/5f58a2361e897958db045d2e_facebook-circular-logo.svg" alt="logo facebook" className="rrss-selector" /></a>
            <a href='http://www.linkedin.com' target='_blank' rel="noreferrer"><img src="https://global-uploads.webflow.com/5f3108520188e7588ef687b1/5f58a2299a0e417966e9013d_linkedin-circular-logo.svg" alt="logo linkedin" className="rrss-selector" /></a>
          </div>
          <div><Link to='/' className="title">adrenathure</Link></div>
          <div className="dropdown">
            {!user &&
              <button className='buttonUsername'>ESPACIO CLIENTE</button>}
            {user &&
              <button className='buttonUsername'>{user.user}</button>}
            <div className="dropdown-content">
              <Link to={'/Profile'}>Perfil</Link>
              {user &&
                <Link to={'/'} onClick={() => {
                  setRegistered(false)
                  setUser(null)
                }}>Salir</Link>}
              {!user &&
                <Link to={'/login'}>Iniciar sesión</Link>
              }
            </div>
          </div>
        </div>
        <nav id="header-nav">
          <Link to="/experiences" className='navLinks'>EXPERIENCES </Link>
          <Link to="/places" className='navLinks'>DESTINOS</Link>
          <Link to="/about" className='navLinks'>SOBRE NOSOTROS</Link>
          <Link to="/contact" className='navLinks'>CONTACTO</Link>
        </nav>
        <div id="carousel">
          <CarouselSlick />
        </div>
      </div>
    </div>
  )
}
export default Header
