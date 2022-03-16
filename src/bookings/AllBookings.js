import useFetch from '../useFetch'
import { Suspense, useState } from 'react'
import Loading from '../Loading'
import { Link } from 'react-router-dom'
import { useSetModal, useUser } from '../hooks'
import { Navigate } from 'react-router-dom'
import './AllBookings.css'


function AllBookings() {
  const setModal = useSetModal()
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
      setModal(<><p>Deleted successfully</p> <button onClick={() => window.location.reload(true)}>volver</button></>)
      // window.location.reload(true)
    } else {
      if (res.status === 404) {
        setModal(<><p>No se ha podido borrar/ error desconocido</p> <button onClick={() => window.location.reload(true)}>volver</button></>)

      }
    }
  }

  if (!user) {
    return <Navigate to="/login" />
  }

  return bookings && (
    <>
      <div>
        {bookings.map(booking =>
          <div key={booking.id} className='articles'>
            <div className='fila'>experiencia :
              <div className='columna'> {booking.experienceName}</div>
            </div>
            <div className='fila'>numero de reserva :
              <div className='columna'> {booking.bookingNumber}</div>
            </div>
            <div className='fila'>fecha
              <div className='columna'> {booking.bookingDate}</div>
            </div>
            <div className='fila'>precio total
              <div className='columna'> {booking.totalPrice}</div>
            </div>
            <div className='fila'>plazas reservadas :
              <div className='columna'> {booking.reservedSeats}</div>
            </div>
            <div className='fila'>
            <Link className='button-link' to={'/profile/bookings/' + booking.id}>Ver</Link>
            <div className='columna'><div className='button-delete' value={booking.id} onClick={handleClick}>borrar reserva</div></div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

const AllBookingsWrapper = () =>
  <Suspense fallback={<Loading className='page' />}>
    <AllBookings />
  </Suspense>


export default AllBookingsWrapper