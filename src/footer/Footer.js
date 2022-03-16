import useFetch from 'fetch-suspense'
import { Suspense } from 'react'
import { Link } from "react-router-dom"
import Loading from '../Loading'
import './Footer.css'

function Footer() {
  const experiences = useFetch('http://localhost:3000/experiences')
  const placeId = useFetch('http://localhost:3000/places/')
  const update =new Date().getFullYear()
  return (
    <div className='footer'>
      <div className='headerFooter'>
        <h2 id='footerHeader'>
          <Link to="/" className='footerLinks'>adrenathure</Link>
        </h2>
        <section className="bodyFooter">
          <article className='footerNavLinks'>
            <div id='footerExperiences'>
              <Link to="/experiences" className='footerLinks'>experiencias</Link>
              <div key={experiences.id} className='footerList'>
              {experiences.map(experience =>
              <Link to={'/experiences/' + experience.id} className='footerList'>
              {experience.experienceName}
              </Link>)}
              </div>
            </div>
           <div id='footerPlaces'>
              <Link to="/places" className='footerLinks'>destinos</Link>
              <div className="footerList">
              {placeId.map(place =>
              <Link to={'/places/' + place.id} className='footerList'>
              {place.placeName}
              </Link>)}
              </div>
           </div>
           <div id='footerAbout'>
              <Link to="/about" className='footerLinks'>sobre nosotros</Link>
           </div>
           <div id='footerContact'>
              <Link to="/contact" className='footerLinks'>contacto</Link>
              <div className='footerEmail'>
                <div><a href='mailto:adrenathure.info@gmail.com?subject=Consulta Experiencias' className='footerList' target='_blank' rel="noreferrer">
                <img id='email' src="https://img.icons8.com/external-xnimrodx-blue-xnimrodx/64/000000/external-email-customer-service-xnimrodx-blue-xnimrodx-2.png" alt="email"/>adrenathure.info@gmail.com</a></div>
                <div><img id='phone' src="https://img.icons8.com/emoji/48/000000/telephone.png" alt="teléfono"/>986 123 456</div>
                <div id='address'>
                <img  src="https://img.icons8.com/office/16/000000/building.png" alt="office"/>Avda. de García Barbón, 27<br/>36201Vigo (Pontevedra)
                </div>
              </div>
           </div>
           <div id='footerLegal'>
              <Link to="/terminosYCondiciones" target='_blank' rel="noreferrer" className='footerLinks'>términos legales</Link>
              <div className='footerLegal'>
                <div><Link to="/terminosYCondiciones" target='_blank' rel="noreferrer" className='footerLinks'>términos y condiciones</Link></div>
                <div><Link to="/politicaDePrivacidad" target='_blank' rel="noreferrer" className='footerLinks'>política de privacidad</Link></div>
                <div><Link to="/politicaDeCookies" target='_blank' rel="noreferrer" className='footerLinks'>política de cookies</Link></div>
              </div>
           </div>
          </article>
        </section>
        <section id='footerSocialMedia'>
         <a className='socialMedia' href ='http://www.twitter.com' target='_blank' rel="noreferrer"><img  src="https://global-uploads.webflow.com/5f3108520188e7588ef687b1/5f58a208666f7b5d1a711143_twitter-circular-logo.svg" alt="logo twitter" className="rrss-selector" /></a>
         <a className='socialMedia' href ='http://www.instagram.com' target='_blank' rel="noreferrer"><img src="https://global-uploads.webflow.com/5f3108520188e7588ef687b1/5f58a21b3b98e1679a71fb14_instagram-circular-logo.svg" alt="logo instagram" className="rrss-selector" /></a>
         <a className='socialMedia' href ='http://www.facebook.com' target='_blank' rel="noreferrer"><img src="https://global-uploads.webflow.com/5f3108520188e7588ef687b1/5f58a2361e897958db045d2e_facebook-circular-logo.svg" alt="logo facebook" className="rrss-selector" /></a>
         <a className='socialMedia' href ='http://www.linkedin.com' target='_blank' rel="noreferrer"><img src="https://global-uploads.webflow.com/5f3108520188e7588ef687b1/5f58a2299a0e417966e9013d_linkedin-circular-logo.svg" alt="logo linkedin" className="rrss-selector" /></a>
        </section>
      </div>
      <section className='footerEquipment'>
        <div className='footerCopy'>&copy; Adrenathure 2022 - {update}</div>
        <div className='footerEffort'>Hecho con 💪 por Zu, Rubén, Carlos y Manuel de JSB08VI</div>
        <div></div>
      </section>
    </div>
  )
  
}

const FooterWrapper = () =>
  <Suspense fallback={<Loading className='page' />}>
    <Footer />
  </Suspense>

export default FooterWrapper