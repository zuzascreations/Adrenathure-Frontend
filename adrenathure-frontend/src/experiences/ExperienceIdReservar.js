import { Suspense, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { useSetModal, useUser } from '../hooks'
import Loading from '../Loading'
import useFetch from '../useFetch'


function ExperienceIdReservar() {
  const navigate = useNavigate()
  const setModal = useSetModal()
  const { id, date } = useParams()
  const experiences = useFetch('http://localhost:3000/experiences/' + id + '/' + date)

  const [experiencePhoto, setExperiencePhoto] = useState(experiences[0].experiencePhoto)
  const [experienceName, setExperienceName] = useState(experiences[0].experienceName)
  const [place_id, setPlace_id] = useState(experiences[0].placeName)
  const [experienceDate, setExperienceDate] = useState(date)
  const [experienceHour, setExperienceHour] = useState((experiences[0].experienceHour))
  const [availableSeats, setAvailableSeats] = useState(experiences[0].availableSeats)
  const [reservedSeats, setReservedSeats] = useState('')
  const [price, setPrice] = useState(experiences[0].price || '')
  const [totalPrice, setTotalPrice] = useState(0)

  const user = useUser()


  const handleSubmit = async e => {

    let totalPrice = price * reservedSeats
    let availableSeats = experiences[0].availableSeats - reservedSeats
    e.preventDefault()
    const res = await fetch('http://localhost:3000/bookings/' + id , {
      method: 'POST',
      body: JSON.stringify({ experiencePhoto, experienceName, place_id, experienceDate, experienceHour, availableSeats, reservedSeats, price, totalPrice }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + user.token
      }
    })

    if (res.ok) {
      const data = await res.json()
      setModal('Reservado con éxito')
      navigate('/yourBooking/'+ data.bookingId)
       window.location.reload(true)
    } else {
      if (res.status === 404) {
        setModal(<><p>No se puede reservar más plazas de las que tenemos libres</p><button onClick={() => setModal(null)}>volver</button></>)
      }
      if (res.status === 400) {
        setModal(<><p>Por favor, revisa si todos los campos están rellenos correctamente o si hay suficientes plazas libres.</p><button onClick={()=> setModal(null)}>volver</button></>)
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
      <form  className="form" onSubmit={handleSubmit}>
        <fieldset className="form-section">
          <legend>Ya estás muy cerca de vivir una experiencia inolvidable!</legend>
          <label>
            <span>nombre experiencia</span>
            <br/>
            <input name="name" value={experienceName} onChange={e => setExperienceName(e.target.value)} disabled/>
          </label>
          <label>
            <span>destino</span>
            <br/>
            <input name="place_id" value={place_id} onChange={e => setPlace_id(e.target.value)} disabled/>
          </label>
          <label>
            <span>fecha</span>
            <br/>
            <input name="fecha" type="date" value={experienceDate} onChange={e => setExperienceDate(e.target.value)} disabled/>
          </label>
          <label>
            <span>hora</span>
            <br/>
            <input name="hour" type="time" value={experienceHour} onChange={e => setExperienceHour(e.target.value)} disabled/>
          </label>
          <label>
            <span>plazas libres</span>
            <br/>
            <input name="availableSeats" type="number" value={availableSeats} onChange={e => setAvailableSeats(e.target.value)} disabled/>
          </label>
          <label>
            <span>plazas reservadas</span>
            <br/>
            <input name="reservedSeats" type="number" min="0" max={availableSeats} placeholder="Cuantas plazas te gustaría reservar?" value={reservedSeats} onChange={e => setReservedSeats(e.target.value)} />
          </label>
          <label>
            <span>precio/plaza</span>
            <br/>
            <input name="price" type="number" value={price} onChange={e => setPrice(e.target.value)} disabled/>€
          </label>
          <label>
            <span>precio total</span>
            <br/>
            <input name="total price" type="number" value={(price * reservedSeats)} onChange={e => setTotalPrice(e.target.value)} disabled/>€
          </label>
          <button>ENVIAR</button>
        </fieldset>
      </form>
  )
}

const ExperienceIdReservarWrapper = () =>
  <Suspense fallback={<Loading className='page' />}>
    <ExperienceIdReservar />
  </Suspense>

export default ExperienceIdReservarWrapper
