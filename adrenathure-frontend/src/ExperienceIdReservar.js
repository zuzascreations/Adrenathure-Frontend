import { Suspense, useState } from 'react'
import { useNavigate, Navigate, useParams } from 'react-router-dom'
import { useUser } from './hooks'
import Loading from './Loading'
import useFetch from './useFetch'


function ExperienceIdReservar() {
  const { id } = useParams()
  const experiences = useFetch('http://localhost:3000/experiences/' + id )

  const [experienceName, setExperienceName] = useState(experiences[0].experienceName)
  const [place_id, setPlace_id] = useState(experiences[0].place_id)
  const [experienceDate, setExperienceDate] = useState('')
  const [experienceHour, setExperienceHour] = useState((experiences[0].experienceHour))
  const [availableSeats, setAvailableSeats] = useState(experiences[0].availableSeats)
  const [reservedSeats, setReservedSeats] = useState('')
  const [price, setPrice] = useState(experiences[0].price || '')
  const [totalPrice, setTotalPrice] = useState('')

  const [error, setError] = useState(null)
  const navigate = useNavigate()
  const user = useUser()

  // const fd = new FormData()
  // fd.append('experienceName', experienceName)
  // fd.append('place_id', place_id)
  // fd.append('experienceDate', experienceDate)
  // fd.append('experienceHour', experienceHour)
  // fd.append('availableSeats', availableSeats)
  // fd.append('reservedSeats', reservedSeats)
  // fd.append('price', price)
  // fd.append('totalPrice', totalPrice)


  const handleSubmit = async e => {
    e.preventDefault()
    const res = await fetch('http://localhost:3000/experiences/' + id , {
      method: 'POST',
      body: JSON.stringify({ experienceName, place_id, experienceDate, experienceHour, availableSeats, reservedSeats, price, totalPrice }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + user.token
      }
    })
    const data = await res.json()
    if (res.ok) {
      setError('Updated successfully')
      // navigate('/')
    } else {
      setError(data?.error || 'Error desconocido')
    }
  }

  if (!user) {
    return <Navigate to="/login" />
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
          <input name="date" value={experienceDate} onChange={e => setExperienceDate(e.target.value)} />
        </label>
        <label>
          <span>hora:</span>
          <input name="hour" value={experienceHour} onChange={e => setExperienceHour(e.target.value)} />
        </label>
        <label>
          <span>asientos libres:</span>
          <input name="availableSeats" value={availableSeats} onChange={e => setAvailableSeats(e.target.value)} />
        </label>
        <label>
          <span>asientos reservados:</span>
          <input name="reservedSeats" value={reservedSeats} onChange={e => setReservedSeats(e.target.value)} />
        </label>
        <label>
          <span>precio:</span>
          <input name="price" value={price} onChange={e => setPrice(e.target.value)} />
        </label>
        <label>
        <span>escoge foto experiencia:</span>
        <input name="totalPrice" value={totalPrice} onChange={e => setTotalPrice(e.target.files[0])} />
      </label>
        <button>guardar</button>
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
