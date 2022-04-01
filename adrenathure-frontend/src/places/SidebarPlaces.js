import { Suspense } from 'react'
import Loading from '../Loading'
import useFetch from 'fetch-suspense'
import { Link } from "react-router-dom"
import '../experiences/Experiences.css'
import PlacesMap from './PlacesMap'


function SidebarPlaces() {
  const places = useFetch('http://localhost:3000/places')
  
  return places && (
    
    <div className="experiences">
        { places.length ?
        places.map(place =>
          <div key={place.id} className='articleExp'>
            <div className='photoArticle'>
              <img className='photoExperience' src={`http://localhost:3000/${place.photo}`} alt='foto experiencia'></img>
            </div>
            <div key={place.id} >
              <Link to={'/places/' + place.id} className='title-exp'>
                {place.placeName}
              </Link>
              <p className='experience-description'>{place.placeDescription}</p>
              <Link to={'/places/' + place.id} className='button-exp'>
                DESCUBRIR MÁS
              </Link>
            </div>
          </div>
       
        ): <p>aun no hay destinos disponibles, disculpa las molestias.</p>}
    </div>
   
  )
}

const SidebarPlacesWrapper = () =>
  <Suspense fallback={<Loading className="page" />}>
    <SidebarPlaces />
  </Suspense>

export default SidebarPlacesWrapper
