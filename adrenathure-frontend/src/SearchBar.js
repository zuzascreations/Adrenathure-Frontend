import { Suspense, useEffect, useState } from 'react'
import './SearchBar.css'
import useFetch from 'fetch-suspense'
import { Link } from 'react-router-dom'
import Loading from './Loading'
import './Modal.css'
import { useDispatch } from 'react-redux'

function SearchBar() {
  const dispatch = useDispatch()
  const [experiences, setExperiences] = useState([])
  const [places, setPlaces] = useState(null)

  const [showPrices, setShowPrices] = useState(false)
  const [showPlaces, setShowPlaces] = useState(true)
  const [showDates, setShowDates] = useState(false)

  const initialValuePlace = 'Destinos'
  const initialValuePrice = 'Precios'
  const initialValueDate = 'Fechas'

  const [valuePlace, setValuePlace] = useState(initialValuePlace)
  const [valuePrice, setValuePrice] = useState(initialValuePrice)
  const [valueDate, setValueDate] = useState(initialValueDate)

  const experienceData = useFetch('http://localhost:3000/experiences')
  const placesData = useFetch('http://localhost:3000/places')

  useEffect(() => {
    setExperiences(experienceData)
    setPlaces(placesData)
  }, [experienceData, placesData])

  const showOff = () => {
    setShowPrices(false)
    setShowPlaces(false)
    setShowDates(false)
  }
  function Modal1() {
    return (
      <>
      <p className='emergentSearch'>{valuePlace}</p>
      {
        places.map(place =>
          <p className='place' onClick={() => setValuePlace(place.placeName)}>{place.placeName}</p>
        )}
    </>)
    
  }
  function Modal2() {
    return (
      <>
      <p className='emergentSearch'>{valuePrice}</p>
      {
        experiences.map(experience =>
          <p className='price' onClick={() => setValuePrice(experience.price)}>{experience.price}</p>
        )}
    </>)
    
  }
  function Modal3() {
    return (
      <>
      <p className='emergentSearch'>{valuePlace}</p>
      {experiences.map(experience =>
          <p className='date' onClick={() => setValueDate(experience.experienceDate)}>{experience.experienceDate.substring(0, 10)}</p>
        )}
    </>)
    
  }

  return (
    <>
      <div className='searchBar'>
        <div onClick={() => dispatch({type:'modal', modal: <Modal1/>})  }>
            {valuePlace}
          
        </div>
        <div onClick={() => dispatch({type:'modal', modal: <Modal2/>})} >
          {valuePrice}
          
        </div>
        <div onClick={() => dispatch({type:'modal', modal: <Modal3/>}) }>
          {valueDate.substring(0, 10)}
         
        </div>
        <div className='emergentSearch' onClick={() => {
          showOff()
        }}><Link to={`/${valuePlace}&${valuePrice}&${valueDate}`}>buscar</Link>
        </div>
        <p className='resetSearch' onClick={() => {
          setValuePlace(initialValuePlace)
          setValuePrice(initialValuePrice)
          setValueDate(initialValueDate)         
          showOff()
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