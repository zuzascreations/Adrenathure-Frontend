import useFetch from 'fetch-suspense'
import { Suspense } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loading from '../Loading'
import './SearchPage.css'

function SearchPage() {

  let { date, place, lowPrice, highPrice } = useParams()

  if (date === 'Fechas') {
    date = ''
  }

  if (place === 'Destinos') {
    place = ''
  }

  
  const conditions = []

  let url = ('http://localhost:3000/experiences?')
  if (place.length) {
    conditions.push(`place=${place}`)
  }
  if (date) {
    conditions.push(`date=${date}`)
  }
  if (lowPrice) {
    conditions.push(`lowPrice=${lowPrice}`)
  }
  if (highPrice) {
    conditions.push(`highPrice=${highPrice}`)
  }

  url += conditions.join('&')
  const experiences = useFetch(url)

  return (
    <>
      <div className='errorSearch'>
        {!experiences.length &&
          <p>no se han encontrado resultados</p>}
      </div>
      <div className='experiences-searched'>
        {experiences &&
          experiences.map(experience =>
            <div className='bodyArticle'>
              <img className='experience-photos' src={`http://localhost:3000/${experience.experiencePhoto}`} alt="avatar" />
              <Link to={'/experiences/' + experience.experience_id}>{experience.experienceName}:</Link>
              <p>Descripción: {experience.experienceDescription}</p>
              <p>Destino: {experience.placeName}</p>
              <p>Precio: {experience.price}</p>
            </div>
          )}
      </div>
    </>
  )
}

const SearchPageWrapper = () =>
  <Suspense fallback={<Loading className='page' />}>
    <SearchPage />
  </Suspense>


export default SearchPageWrapper