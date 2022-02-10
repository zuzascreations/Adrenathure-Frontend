import useFetch from '../useFetch'
import { Suspense } from 'react'
import Loading from '../Loading'
import { Link } from 'react-router-dom'


function AllBookings() {
  const bookings = useFetch('http://localhost:3000/bookings/admin/bookings')
 
  return bookings && (
    <div >
      <div className='articles'>
        {bookings.map(booking =>
          <article key={booking.id}>
            <p>{booking.bookingNumber}</p>
            <p>{booking.bookingDate}</p>
            <p>{booking.totalPrice}</p>
            <p>{booking.reservedSeats}</p>
            <Link to={'/profile/bookings/' + booking.id }>Ver</Link>
          </article>
        )}
      </div>
    </div>
  )
}

const AllBookingsWrapper = () =>
  <Suspense fallback={<Loading className='page' />}>
    <AllBookings />
  </Suspense>


export default AllBookingsWrapper