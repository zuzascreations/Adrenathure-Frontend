import { Suspense } from 'react'
import Loading from '../Loading'
import useFetch from "../useFetch"
import { Link } from "react-router-dom"
import ErrorBoundary from '../ErrorBoundary'

function Bookings() {
  const bookings = useFetch('http://localhost:3000/bookings')
  return bookings && (
    <div>
        {bookings.length ?
        bookings.map(booking =>
          <article key={booking.id} className='articles'>
            <div className='fila'>Nº de la reserva:
              <div className='columna'>{booking.bookingNumber}</div>
            </div>
            <div className='fila'>Fecha:
              <div className='columna'>{booking.bookingDate.substring(0,10)}</div>
            </div>
            <div className='fila'>Precio total:
              <div className='columna'>{booking.totalPrice}</div>
            </div>
            <div className='fila'>Plazas reservadas:
              <div className='columna'>{booking.reservedSeats}</div>
            </div>
            <Link className='button-link' to={'/profile/bookings/' + booking.id }>Ver</Link>
          </article>
        ): <p> aun no has realizado ninguna reserva</p>}
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
