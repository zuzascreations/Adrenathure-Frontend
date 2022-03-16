import { Suspense } from 'react'
import Loading from '../Loading'
import useFetch from "../useFetch"
import { Link } from "react-router-dom"
import ErrorBoundary from '../ErrorBoundary'

function Bookings() {
  const bookings = useFetch('http://localhost:3000/bookings')
  return bookings && (
    <div className="bookings">
        {bookings.map(booking =>
          <article key={booking.id}>
            <p>nº: {booking.bookingNumber}</p>
            <p>fecha: {booking.bookingDate.substring(0,10)}</p>
            <p>precio total: {booking.totalPrice}</p>
            <p>plazas reservadas: {booking.reservedSeats}</p>
            <Link to={'/profile/bookings/' + booking.id }>Ver</Link>
          </article>
        )}
    </div>
  )
}

const BookingsWrapper = () =>
  <Suspense fallback={<Loading className='page' />}>
    <ErrorBoundary fallback="Bookings is failing">
      <Bookings />
    </ErrorBoundary>
  </Suspense>

export default BookingsWrapper