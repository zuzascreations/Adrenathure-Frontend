import { Suspense } from 'react'
import Loading from '../Loading'
import useFetch from "../useFetch"
import { useParams } from "react-router-dom"
import Punctuation from './Punctuation'

function BookingId() {
  const { id } = useParams()
  const bookingId = useFetch('http://localhost:3000/bookings/' + id)
  return bookingId && (
    <>
      <div>
        <img className='experience-photo' src={`http://localhost:3000/${bookingId.photo}`} alt="avatar" />
      </div>
      <div className="booking-id">
        <h4>nº reserva: {bookingId.bookingNumber}</h4>
        <h4>fecha reserva: {bookingId.bookingDate.substring(0, 10)}</h4>
        <h4>nombre usuario: {bookingId.firstName}</h4>
        <h4>apellido usuario: {bookingId.lastName}</h4>
        <br></br>
        <h4>experience name: {bookingId.experienceName}</h4>
        <h4>destino: {bookingId.placeName}</h4>
        <h4>fecha experience: {bookingId.experienceDate.substring(0, 10)}</h4>
        <h4>hora experience: {bookingId.experienceHour.substring(0, 5)}</h4>
        <h4>asientos reservados: {bookingId.reservedSeats}</h4>
        <h4>precio total: {bookingId.totalPrice} €</h4>
      </div>
      <div>
        <Punctuation />
      </div>
    </>
  )
}

const BookingIdWrapper = () =>
  <Suspense fallback={<Loading className="page" />}>
    <BookingId />
  </Suspense>

export default BookingIdWrapper