import { Suspense, useState } from 'react'
import useFetch from 'fetch-suspense'
import Loading from '../Loading'
import { Link } from 'react-router-dom'
import { useSetModal } from '../hooks'
import '../Modal.css'
import './SearchBar.css'

function SearchBar() {
  const setModal = useSetModal()

  const initialValuePlace = 'Destino ⌄'
  const initialValueLowPrice = '0'
  const initialValueHighPrice = '10000'
  const initialValueDate = 'Fechas ⌄'

  const [viewPlace, setViewPlace] = useState(false)
  const [viewPrice, setViewPrice] = useState(false)
  const [viewDate, setViewDate] = useState(false)

  const [valuePlace, setValuePlace] = useState(initialValuePlace)
  const [valueLowPrice, setValueLowPrice] = useState(initialValueLowPrice)
  const [valueHighPrice, setValueHighPrice] = useState(initialValueHighPrice)
  const [valueDate, setValueDate] = useState(initialValueDate)

  const placesData = useFetch('http://localhost:3000/places')
  const dates = useFetch('http://localhost:3000/dates')

  const showDefault = () => {
    setValuePlace(initialValuePlace)
    setValueLowPrice(initialValueLowPrice)
    setValueHighPrice(initialValueHighPrice)
    setValueDate(initialValueDate)
  }
  const handleClick = () => {
    setViewPlace(true)
    setModal(null)
  }
  const handleClick2 = () => {
    setViewPrice(true)
    setModal(null)
  }
  const handleClick3 = () => {
    setViewDate(true)
    setModal(null)
  }
  function Modal1() {
    return (
      <>
        {/* <p className='emergentSearch'>Destinos</p> */}
        <select defaultValue={'Destino:'} onChange={(e) => setValuePlace(e.target.value)}>
          <option disabled  >Destino:</option>
          {
            placesData.map(place =>
              <option key={place.id} className='place' value={place.placeName} >{place.placeName}</option>
            )
          }
        </select>
        <button className="button-modal" onClick={handleClick}>aplicar</button>
      </>)
  }
  function Modal2() {
    return (
      <>
        {/* <p className='emergentSearch'>precios</p> */}

        <select defaultValue={'Precio desde:'} onChange={(e) => setValueLowPrice(e.target.value)}>
          <option disabled >Precio desde:</option>
          <option className='price' value={100} >100</option>
          <option className='price' value={200} >200</option>
          <option className='price' value={300} >300</option>
          <option className='price' value={500} >500</option>
        </select>
        <select defaultValue={'Precio hasta:'} onChange={(e) => setValueHighPrice(e.target.value)}>
          <option disabled >Precio hasta:</option>
          <option className='price' value={300} >300</option>
          <option className='price' value={500} >500</option>
          <option className='price' value={1000} >1000</option>
          <option className='price' value={2000} >2000</option>
        </select>
        <button className="button-modal" onClick={handleClick2}>aplicar</button>
      </>)
  }

  function Modal3() {
    return (
      <>
        {/* <p className='emergentSearch'>fechas</p> */}
        <select defaultValue={'Fecha:'} onChange={(e) => setValueDate(e.target.value)}>
          <option disabled >Fecha:</option>
          {
          dates.map(date =>
            <option key={date.idDate} className='date' value={date.experienceDate} >{date.experienceDate}</option>
          )
          }
        </select>
        <button className="button-modal" onClick={handleClick3}>aplicar</button>
      </>
    )
  }

  return (
    <>
      <div className='searchBar'>
        <div className="select">
          <div onClick={() => {
            setModal(<Modal1 />)
            setViewPlace(false)
            setValuePlace(initialValuePlace)
          }}>
            {viewPlace ? valuePlace : initialValuePlace}
          </div>
          <div onClick={() => {
            setModal(<Modal2 />)
            setViewPrice(false)
            setValueHighPrice(initialValueHighPrice)
            setValueLowPrice(initialValueLowPrice)
          }} >
            {viewPrice ? ` ${valueLowPrice}€ - ${valueHighPrice}€` : 'Precio ⌄'}

          </div>
          <div onClick={() => {
            setModal(<Modal3 />)
            setViewDate(false)
            setValueDate(initialValueDate)
          }}>
            {viewDate ? valueDate.substring(0, 10) : 'Fecha ⌄'}
          </div>
        </div>
        <div className="search">
          <div onClick={() => {
            // showDefault()
          }}><Link className='emergentSearch' to={`/${valuePlace}&${valueLowPrice}&${valueHighPrice}&${valueDate}`}><img className="lupa" src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png" alt="lupa"/></Link>
          </div>
          <img className="lupa" img src="https://img.icons8.com/ios-glyphs/30/000000/clear-search.png" alt="clear" onClick={() => {
            showDefault()
          }}></img>
          </div>
        </div>
    </>
  )
}
const searchBarWrapper = () =>
  <Suspense fallback={<Loading className='page' />}>
    <SearchBar />
  </Suspense>

export default searchBarWrapper
