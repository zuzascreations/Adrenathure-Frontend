import useFetch from '../useFetch'
import { Suspense, useState } from 'react'
import Loading from '../Loading'
import { Link } from 'react-router-dom'
import { useUser } from '../hooks'
import { Navigate } from 'react-router-dom'


function AllBookings() {
  const user = useUser()
  const [error, setError] = useState(null)

  const bookings = useFetch('http://localhost:3000/bookings/admin/bookings')


  const handleClick = async (e) => {
    const bookingId = e.target.value
    const res = await fetch('http://localhost:3000/bookings/admin', {
      method: 'DELETE',
      body: JSON.stringify({ bookingId }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + user.token
      }
    })
    if (res.ok) {
      // const data = await res.json()
      setError('Deleted successfully')
      window.location.reload(true)
    } else {
      if (res.status === 404) {
        setError('No se ha podido borrar//Error desconocido')

      }
    }
  }

  if (!user) {
    return <Navigate to="/login" />
  }

  return bookings && (
    <>
      <div className='articles'>
        {bookings.map(booking =>
          <article key={booking.id}>
            <p>nº: {booking.bookingNumber}</p>
            <p>fecha: {booking.bookingDate.substring(0,10)}</p>
            <p>precio total: {booking.totalPrice}</p>
            <p>plazas reservadas: {booking.reservedSeats}</p>
            <Link to={'/profile/bookings/' + booking.id }>Ver</Link>
            <button value={booking.id}  onClick={handleClick}>borrar reserva</button>
          </article>
        )}
      </div>
      <p>{error}</p>
    </>
  )
}

const AllBookingsWrapper = () =>
  <Suspense fallback={<Loading className='page' />}>
    <AllBookings />
  </Suspense>


export default AllBookingsWrapper