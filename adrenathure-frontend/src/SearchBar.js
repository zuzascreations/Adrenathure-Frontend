import { Suspense, useEffect, useState } from 'react'
import './SearchBar.css'
import useFetch from 'fetch-suspense'
import { Link } from 'react-router-dom'
import Loading from './Loading'
import './Modal.css'
import { useDispatch } from 'react-redux'

function SearchBar() {
  const dispatch = useDispatch()

  const initialValuePlace = 'Destinos'
  const initialValuePriceLow = 'Precios '
  const initialValuePriceHigh = ''
  const initialValueDate = 'Fechas'




  const [valuePlace, setValuePlace] = useState(initialValuePlace)

  const [valuePriceLow, setValuePriceLow] = useState(initialValuePriceLow)
  const [valuePriceHigh, setValuePriceHigh] = useState(initialValuePriceHigh)
  const [valueDate, setValueDate] = useState(initialValueDate)

  const experienceData = useFetch('http://localhost:3000/experiences')
  const placesData = useFetch('http://localhost:3000/places')
  const dates = useFetch('http://localhost:3000/dates')


  const showDefault = () => {
    setValuePlace(initialValuePlace)
    setValuePriceLow(initialValuePriceLow)
    setValuePriceHigh(initialValuePriceHigh)
    setValueDate(initialValueDate)
  }
  function Modal1() {
    return (
      <>
        <p className='emergentSearch'>Destinos</p>
        {/* {
          placesData.map(place =>
            <>
            <p key={place.id} className='place' onClick={() => setValuePlace(place.placeName)}>{place.placeName}</p>
            
            </>
          )} */}
        <select onChange={(e) => setValuePlace(e.target.value)}>
          <option disabled selected  >elige:</option>
          {
            placesData.map(place =>
              <>
                <option key={place.id} className='place' value={place.placeName} >{place.placeName}</option>
              </>
            )
          }
        </select>

      </>)
  }
  function Modal2() {
    return (
      <>
        <p className='emergentSearch'>precios</p>

        <select onChange={(e) => setValuePriceLow(e.target.value)}>
          <option disabled selected  >desde:</option>
          {
            experienceData.map(experience =>
              <>
                <option key={experience.id} className='price' value={100 * Math.floor((experience.price) / 100)} >{100 * Math.floor((experience.price) / 100)}</option>
              </>
            )
          }
        </select>
        <select onChange={(e) => setValuePriceHigh(e.target.value)}>
          <option disabled selected  >hasta:</option>
          {
            experienceData.map(experience =>
              <>
                <option key={experience.id} className='price' value={100 * Math.ceil((experience.price) / 100)} >{100 * Math.ceil((experience.price) / 100)}</option>
              </>
            )
          }
        </select>
      </>)

  }
  function Modal3() {
    return (
      <>
        <p className='emergentSearch'>{valueDate}</p>
        {dates.map(date =>
          <p key={date.id} className='date' onClick={() => setValueDate(date.experienceDate)}>{date.experienceDate.substring(0, 10)}</p>
        )
        }
      </>)

  }

  return (
    <>
      <div className='searchBar'>
        <div onClick={() => dispatch({ type: 'modal', modal: <Modal1 /> })}>
          {valuePlace}
        </div>
        <div onClick={() => dispatch({ type: 'modal', modal: <Modal2 /> })} >
          {valuePriceLow} - {valuePriceHigh}
        </div>
        <div onClick={() => dispatch({ type: 'modal', modal: <Modal3 /> })}>
          {valueDate.substring(0, 10)}
        </div>
        <div className='emergentSearch' onClick={() => {
          showDefault()
        }}><Link to={`/${valuePlace}&${valuePriceLow}&${valuePriceHigh}&${valueDate}`}>buscar</Link>
        </div>
        <p className='resetSearch' onClick={() => {
          showDefault()
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