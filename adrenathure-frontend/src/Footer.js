import { Link } from "react-router-dom"
import './Footer.css'


function Footer() {

    return(

            <div className='divHeaderFooter'>
                <div className='headerFooter'>
                    <h1>FOOTER ADRENATHURE</h1>
                    <p id='clientSpaceFooter' href="url">REDES SOCIALES</p>
                </div>
                <nav>
                    <Link to="/experiences" className='navLinksFooter'>EXPERIENCIAS </Link>
                    <Link to="/places"className='navLinksFooter'>DESTINOS</Link>
                    <Link to="/about"className='navLinksFooter'>SOBRE NOSOTROS</Link>
                    <Link to="/contact" className='navLinksFooter'>CONTACTO</Link>
                </nav>
            </div>
        )
}

export default Footer