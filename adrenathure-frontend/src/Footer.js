import { Link } from "react-router-dom"
import './Footer.css'


function Footer() {

  return (

    <div className='divHeaderFooter'>
      <div className='headerFooter'>
        <h1>footer adrenathure</h1>
        <p id='clientSpaceFooter' href="url">redes sociales</p>
      </div>
      <nav>
        <Link to="/experiences" className='navLinksFooter'>experiencias</Link>
        <Link to="/places" className='navLinksFooter'>destinos</Link>
        <Link to="/about" className='navLinksFooter'>sobre nosotros</Link>
        <Link to="/contact" className='navLinksFooter'>contacto</Link>
      </nav>
    </div>
  )
}

export default Footer