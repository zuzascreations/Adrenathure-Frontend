import useFetch from 'fetch-suspense'
import { Suspense } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Loading from '../Loading'
import './SearchPage.css'
const BASE_URL  = process.env.REACT_APP_URL


function SearchPage() {

  let { search } = useLocation()
  const experiences = useFetch(`http://${BASE_URL}/experiences${search}`)

  return (
    <>
      <div className='errorSearch'>
        <h2 id='title-searchPage'>Resultados de la busqueda:</h2>
        {!experiences.length &&
          <p id='messageNoContent'>no se han encontrado resultados</p>}
      </div>
      <div className='experiences'>
        <div className='art'>
          {experiences &&
            experiences.map(experience =>
              <div key={experience.experience_id} className='articleExp'>
                <img className='photoExperience' src={`http://${BASE_URL}/${experience.experiencePhoto}`} alt="avatar" />
                <article key={experience.id} >
                <Link className='title-exp' to={'/experiences/' + experience.experience_id}>{experience.experienceName}:</Link>
                <p className='description'>Descripción: {experience.experienceDescription}</p>
                <p className='searchData'>Destino: {experience.placeName}</p>
                <p className='searchData'>Precio: {experience.price} €</p>
                <Link to={'/experiences/' + experience.id} className='button-exp'>
                descubrir más
              </Link>
                </article>
              </div>
            )}
        </div>
      </div>
    </>
  )
}

const SearchPageWrapper = () =>
  <Suspense fallback={<Loading className='page' />}>
    <SearchPage />
  </Suspense>


export default SearchPageWrapper
