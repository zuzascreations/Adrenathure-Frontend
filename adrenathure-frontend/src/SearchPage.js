import useFetch from 'fetch-suspense'
import { Suspense } from 'react'
import { useParams } from 'react-router-dom'
import Loading from './Loading'
import './SearchPage.css'


function SearchPage() {
  let { date, place, price } = useParams()
  
  if (date === 'Fechas') {
    date = ''
  }
  if (place === 'Destinos') {
    place = ''
  }
  if (price === 'Precios') {
    price = ''
  }
  const conditions = []

  let url = ('http://localhost:3000/experiences?')
  if (place) {
    conditions.push(`place=${place}`)
  }
  if (date) {
    conditions.push(`date=${date}`)
  }
  if (price) {
    conditions.push(`lowPrice=${price}`)
  }

  url += conditions.join('&')


  const experiences = useFetch(url)
 

  return (

    <div>
      {!experiences &&
      <p className='errorSearch'>no se han encontrado resultados</p>}
      {experiences &&
        experiences.map(experience =>
          <>
            <h2>{experience.experienceName}:</h2>
            <p>Descripción: {experience.experienceDescription}</p>
            <p>Precio: {experience.price}</p>
            <p>Fechas: {experience.experienceDate}</p>
          </>)}
    </div>
  )
}

const SearchPageWrapper = () =>
  <Suspense fallback={<Loading className='page' />}>
    <SearchPage />
  </Suspense>


export default SearchPageWrapper