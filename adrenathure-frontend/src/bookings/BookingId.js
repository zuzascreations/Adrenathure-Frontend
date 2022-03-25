import { Suspense } from 'react'
import Loading from '../Loading'
import useFetch from "../useFetch"
import { Link, useParams } from "react-router-dom"
import PunctuationToRate from '../users/PunctuationToRate'

function BookingId() {
  const { id } = useParams()
  const bookingId = useFetch('http://localhost:3000/bookings/' + id)

  return bookingId && (
    <>
      <div>
        <img className='experience-photo' src={`http://localhost:3000/${bookingId.experiencePhoto}`} alt="avatar" />
      </div>
      <div className="booking-id">
        <h4>nº reserva: {bookingId.bookingNumber}</h4>
        <h4>fecha reserva: {bookingId.bookingDate}</h4>
        <h4>nombre usuario: {bookingId.firstName}</h4>
        <h4>apellido usuario: {bookingId.lastName}</h4>
        <br></br>
        <h4>experiencia name: {bookingId.experienceName}</h4>
        <h4>destino: {bookingId.placeName}</h4>
        <h4>fecha experience: {bookingId.experienceDate}</h4>
        <h4>hora experience: {bookingId.experienceHour}</h4>
        <h4>asientos reservados: {bookingId.reservedSeats}</h4>
        <h4>precio total: {bookingId.totalPrice} €</h4>
      </div>
      <div>
        <p>¡Esperamos para tu voto después de vivir la aventura!</p>
        <PunctuationToRate />
      </div>
    </>
  )
}

const BookingIdWrapper = () =>
  <Suspense fallback={<Loading className="page" />}>
    <BookingId />
  </Suspense>

export default BookingIdWrapper