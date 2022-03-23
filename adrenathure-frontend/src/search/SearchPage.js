import useFetch from 'fetch-suspense'
import { Suspense } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Loading from '../Loading'
import './SearchPage.css'

function SearchPage() {

  let { search } = useLocation()
  const experiences = useFetch(`http://localhost:3000/experiences${search}`)
  
  return (
    <>
      <div className='errorSearch'>
        <h2 id='title-searchPage'>Resultados de la busqueda:</h2>
        {!experiences.length &&
          <p id='messageNoContent'>no se han encontrado resultados</p>}
      </div>
      <div className='experiences-searched'>
        {experiences &&
          experiences.map(experience =>
            <div key={experience.experience_id} className='bodyArticle'>
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
