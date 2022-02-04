import { Suspense } from 'react'
import Loading from '../Loading'
import useFetch from "../useFetch"
import { Link } from "react-router-dom"

function Bookings() {
  const bookings = useFetch('http://localhost:3000/bookings')
  return bookings && (
    <aside className="bookings">
      <ul>
        {bookings.map(booking =>
          <li key={booking.id}>
            <Link to={"/profile/bookings/" + booking.id}>
              {booking.bookingNumber} - {booking.bookingDate.substring(0, 10)}
            </Link>
          </li>
        )}
      </ul>
    </aside>
  )
}

const BookingsWrapper = () =>
  <Suspense fallback={<Loading className='page' />}>
    <Bookings />
  </Suspense>

export default BookingsWrapper