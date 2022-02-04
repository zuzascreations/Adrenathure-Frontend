import { Suspense, useEffect, useState } from 'react'
import './SearchBar.css'
import useFetch from 'fetch-suspense'
import { Link } from 'react-router-dom'
import Loading from './Loading'

function SearchBar() {
  const [experiences, setExperiences] = useState([])
  const [places, setPlaces] = useState(null)

  const [showExperiences, setShowExperiences] = useState(false)
  const [showPlaces, setShowPlaces] = useState(false)
  const [showDates, setShowDates] = useState(false)

  const initialValuePlace = 'Destinos'
  const initialValuePrice = 'Precios'
  const initialValueDate = 'Fechas'

  const [valuePlace, setValuePlace] = useState(initialValuePlace)
  const [valuePrice, setValue3] = useState(initialValuePrice)
  const [valueDate, setValue4] = useState(initialValueDate)

  const experienceData = useFetch('http://localhost:3000/experiences')
  const placesData = useFetch('http://localhost:3000/places')

  useEffect(() => {
    setExperiences(experienceData)
    setPlaces(placesData)
  }, [experienceData, placesData])

  return (
    <>
      <div className='searchBar'>
        <div onClick={() => setShowExperiences(!showExperiences)}>
          <p className='emergentSearch'>{valuePlace}</p>
          {showExperiences &&
            places.map(place =>
              <p onClick={() => setValuePlace(place.placeName)}>{place.placeName}</p>
            )}
        </div>
        <div onClick={() => setShowPlaces(!showPlaces)} >
          <p className='emergentSearch'>{valuePrice}</p>
          {showPlaces &&
            experiences.map(experience =>
              <p onClick={() => setValue3(experience.price)}>{experience.price}</p>
            )}
        </div>
        <div onClick={() => setShowDates(!showDates)}>
          <p className='emergentSearch'>{valueDate}</p>
          {showDates &&
            experiences.map(experience =>
              <p onClick={() => setValue4(experience.experienceDate.substring(0, 10))}>{experience.experienceDate.substring(0, 10)}</p>
            )}
        </div>
        <div className='emergentSearch' onClick={() => {
          setShowExperiences(false)
          setShowPlaces(false)
          setShowDates(false)
        }}><Link to={`/${valuePlace}&${valuePrice}&${valueDate}`}>buscar</Link>
        </div>
        <p className='resetSearch' onClick={() => {
          setValuePlace(initialValuePlace)
          setValue3(initialValuePrice)
          setValue4(initialValueDate)
          setShowExperiences(false)
          setShowPlaces(false)
          setShowDates(false)
        }}>reset Filtros</p>
      </div>
    </>
  )
}
const searchBarWrapper = () =>
  <Suspense fallback={<Loading className='page' />}>
    <SearchBar />
  </Suspense>


export default searchBarWrapper