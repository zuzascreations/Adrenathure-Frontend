import useFetch from './useFetch'
import { Link, useParams } from "react-router-dom"
import { Suspense } from 'react'
import Loading from './Loading'



function YourBooking () {
  const { id } = useParams()
  const booking = useFetch('http://localhost:3000/bookings/' + id) 
  console.log(booking)

  

  return booking && (
    <div className="booking">
      <h1>Datos de tu reserva:</h1>
      <h2>Tu experiencia: {booking.experienceName}</h2>
      <p>Número de reserva: {booking.bookingNumber}</p>
      <p>Destino: {booking.placeName}</p>
      <p>Fecha: {booking.bookingDate}</p>
      <p>Hora: {booking.bookingHour}</p>
      <p>Número de personas: {booking.reservedSeats}</p>
      <p>Precio total: {booking.totalPrice} €</p>

      <button><Link to ='/experiences'>Seguir comprando</Link></button>
      <button><Link to ='/'>Página de inicio</Link></button>
    </div>



  )}


  const YourBookingWrapper = () =>
  <Suspense fallback={<Loading className='page' />}>
    <YourBooking />
  </Suspense>


export default YourBookingWrapper
