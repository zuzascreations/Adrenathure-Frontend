import { Suspense, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { useUser } from './hooks'
import Loading from './Loading'
import useFetch from './useFetch'


function ExperienceIdReservar() {
  const { id, date } = useParams()
  const experiences = useFetch('http://localhost:3000/experiences/' + id + '/' + date)

  const [experienceName, setExperienceName] = useState(experiences[0].experienceName)
  const [place_id, setPlace_id] = useState(experiences[0].placeName)
  const [experienceDate, setExperienceDate] = useState(date)
  const [experienceHour, setExperienceHour] = useState((experiences[0].experienceHour.substring(0,5)))
  const [availableSeats, setAvailableSeats] = useState(experiences[0].availableSeats)
  const [reservedSeats, setReservedSeats] = useState('')
  const [price, setPrice] = useState(experiences[0].price || '')
  const [totalPrice, setTotalPrice] = useState(0)

  const [error, setError] = useState(null)
  const user = useUser()


  const handleSubmit = async e => {
    let totalPrice = price * reservedSeats
    let availableSeats = experiences[0].availableSeats - reservedSeats
    e.preventDefault()
    const res = await fetch('http://localhost:3000/bookings/' + id , {
      method: 'POST',
      body: JSON.stringify({ experienceName, place_id, experienceDate, experienceHour, availableSeats, reservedSeats, price, totalPrice }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + user.token
      }
    })

    if (res.ok) {
      setError('Reservado con éxito')
    } else {
      if (res.status === 400) {
        setError('Por favor, revisa si todos los campos están rellenos correctamente o si hay suficientes plazas libres.')
      }
    }
  }

  if (!user) {
    return <Navigate to="/login" />
  }

  if (experiences[0].availableSeats === 0) {
    return <p>No quedan plazas libres</p>
  }

  return (
    <>
      <form  onSubmit={handleSubmit}>
        <label>
          <span>nombre experiencia:</span>
          <input name="name" value={experienceName} onChange={e => setExperienceName(e.target.value)} />
        </label>
        <label>
          <span>destino:</span>
          <input name="place_id" value={place_id} onChange={e => setPlace_id(e.target.value)} />
        </label>
        <label>
          <span>fecha:</span>
          <input name="fecha" value={experienceDate} onChange={e => setExperienceDate(e.target.value)} />
        </label>
        <label>
          <span>hora:</span>
          <input name="hour" value={experienceHour} onChange={e => setExperienceHour(e.target.value)} />
        </label>
        <label>
          <span>plazas libres:</span>
          <input name="availableSeats" value={availableSeats} onChange={e => setAvailableSeats(e.target.value)} />
        </label>
        <label>
          <span>plazas reservadas:</span>
          <input name="reservedSeats" placeholder="Cuantas plazas vas a necesitar?" value={reservedSeats} onChange={e => setReservedSeats(e.target.value)} />
        </label>
        <label>
          <span>precio/plaza:</span>
          <input name="price" value={price} onChange={e => setPrice(e.target.value)} />
        </label>
        <label>
          <span>precio total:</span>
          <input name="total price" value={(price * reservedSeats)} onChange={e => setTotalPrice(e.target.value)} />
        </label>
        <button>enviar</button>
        <p>{error}</p>
      </form>
    </>
  )
}

const ExperienceIdReservarWrapper = () =>
  <Suspense fallback={<Loading className='page' />}>
    <ExperienceIdReservar />
  </Suspense>

export default ExperienceIdReservarWrapper
