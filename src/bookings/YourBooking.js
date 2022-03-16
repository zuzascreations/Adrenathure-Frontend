import useFetch from '../useFetch'
import { Link, useParams } from "react-router-dom"
import { Suspense } from 'react'
import Loading from '../Loading'



function YourBooking() {
  const { id } = useParams()
  const booking = useFetch('http://localhost:3000/bookings/' + id)

  return booking && (
    <div className="booking">
      <h1>Datos de tu reserva:</h1>
      <h2>Tu experiencia: {booking.experienceName}</h2>
      <img className='experience-photo' src={`http://localhost:3000/${booking.experiencePhoto}`} alt="avatar" />
      <p>Número de reserva: {booking.bookingNumber}</p>
      <p>Fecha de la reserva: {booking.bookingDate.substring(0, 10)}</p>
      <p>Usuario: {booking.firstName} {booking.lastName}</p>
      <p>Destino: {booking.placeName}</p>
      <p>Fecha de la experiencia: {booking.experienceDate.substring(0, 10)}</p>
      <p>Hora: {booking.experienceHour.substring(0, 5)}</p>
      <p>Número de personas: {booking.reservedSeats}</p>
      <p>Precio total: {booking.totalPrice} €</p>
      <button><Link to='/experiences'>Seguir comprando</Link></button>
      <button><Link to='/'>Página de inicio</Link></button>
    </div>
  )
}


const YourBookingWrapper = () =>
  <Suspense fallback={<Loading className='page' />}>
    <YourBooking />
  </Suspense>


export default YourBookingWrapper
