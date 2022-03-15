import useFetch from 'fetch-suspense'
// import { useParams } from "react-router-dom"
import { Suspense } from 'react'
import { Link } from "react-router-dom"
import Loading from '../Loading'
import './Footer.css'

function Footer() {
  const experiences = useFetch('http://localhost:3000/experiences')
  // const { id } = useParams()
  const placeId = useFetch('http://localhost:3000/places/')
  return (
    <div className='footer'>
      <div className='headerFooter'>
        <h2>adrenathure</h2>
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
           
           <Link to="/about" className='footerLinks'>sobre nosotros</Link>
           <Link to="/contact" className='footerLinks'>contacto</Link>
          </article>
        </section>
        <section id='footerSocialMedia'>
         <a className='socialMedia' href ='http://www.twitter.com' target='_blank' rel="noreferrer"><img  src="https://global-uploads.webflow.com/5f3108520188e7588ef687b1/5f58a208666f7b5d1a711143_twitter-circular-logo.svg" alt="logo twitter" className="rrss-selector" /></a>
         <a className='socialMedia' href ='http://www.instagram.com' target='_blank' rel="noreferrer"><img src="https://global-uploads.webflow.com/5f3108520188e7588ef687b1/5f58a21b3b98e1679a71fb14_instagram-circular-logo.svg" alt="logo instagram" className="rrss-selector" /></a>
         <a className='socialMedia' href ='http://www.facebook.com' target='_blank' rel="noreferrer"><img src="https://global-uploads.webflow.com/5f3108520188e7588ef687b1/5f58a2361e897958db045d2e_facebook-circular-logo.svg" alt="logo facebook" className="rrss-selector" /></a>
         <a className='socialMedia' href ='http://www.linkedin.com' target='_blank' rel="noreferrer"><img src="https://global-uploads.webflow.com/5f3108520188e7588ef687b1/5f58a2299a0e417966e9013d_linkedin-circular-logo.svg" alt="logo linkedin" className="rrss-selector" /></a>
        </section>
      </div>
      <section>
        c 2022
        Términos y condiciones
        Política de privcidad
        Política de cookies
      </section>
    </div>
  )
  
}

const FooterWrapper = () =>
  <Suspense fallback={<Loading className='page' />}>
    <Footer />
  </Suspense>

export default FooterWrapper