import useFetch from '../useFetch'
import { Suspense } from 'react'
import Loading from '../Loading'
import { Link } from 'react-router-dom'
import { useSetModal, useUser } from '../hooks'
import { Navigate } from 'react-router-dom'
import './AllBookings.css'


function AllBookings() {
  const setModal = useSetModal()
  const user = useUser()
  const bookings = useFetch('http://localhost:3000/bookings/admin/bookings')

  const handleClick = async (e) => {
    e.preventDefault()
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
      setModal(<p>Deleted successfully</p>)
      setTimeout(() => {
        setModal(null)
        window.location.reload(true)
      }, 2000)
    } else {
      if (res.status === 404) {
        setModal(<p>No se ha podido borrar/ error desconocido</p>)
      }
      if (res.status === 500) {
        setModal(<p>Database error</p>)
      }
    }
  }

  if (!user) {
    return <Navigate to="/login" />
  }

  return (
    <>
      <div>
        {bookings.length ?
          bookings.map(booking =>
            <div key={booking.id} className='articles'>
              <div className='fila'>Nº de la reserva :
                <div className='columna'> {booking.bookingNumber}</div>
              </div>
              <div className='fila'>Experiencia :
                <div className='columna'> {booking.experienceName}</div>
              </div>
              <div className='fila'>Fecha:
                <div className='columna'> {booking.bookingDate}</div>
              </div>
              <div className='fila'>Plazas reservadas :
                <div className='columna'> {booking.reservedSeats}</div>
              </div>
              <div className='fila'>Precio total:
                <div className='columna'> {booking.totalPrice}</div>
              </div>
              <div className='fila'>
                <Link className='button-link' to={'/profile/admin/bookingId/' + booking.id}>VER</Link>
                <div className='columna'>
                  <button className="button-delete" value={booking.id} onClick={handleClick}>BORRAR RESERVA</button>
                </div>
              </div>
            </div>
        ) : <p>No hay ninguna reserva todavía</p>}
      </div>
    </>
  )
}

const AllBookingsWrapper = () =>
  <Suspense fallback={<Loading className='page' />}>
    <AllBookings />
  </Suspense>


export default AllBookingsWrapper
