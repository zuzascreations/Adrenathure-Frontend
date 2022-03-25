import useFetch from '../useFetch'
import { Suspense } from 'react'
import Loading from '../Loading'
import { Link } from 'react-router-dom'
import { useSetModal, useUser } from '../hooks'
import { Navigate } from 'react-router-dom'
import '../List.css'


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
        setModal(<p>No se ha podido borrar/ error desconocido.</p>)
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
      <div className="list">
        <h2 className="list-title">LAS RESERVAS</h2>
        <div className='grid-list-bookings'>
          <span>
            <strong>Nº RESERVA</strong>
          </span>
          <span>
            <strong>FECHA RESERVA</strong>
          </span>
          <span>
            <strong>EXPERIENCIA</strong>
          </span>
          <span>
            <strong>DESTINO</strong>
          </span>
          <span>
            <strong>FECHA EXPERIENCIA</strong>
          </span>
          <span>
            <strong>HORA EXPERIENCIA</strong>
          </span>
          <span>
            <strong>PLAZAS RESERVADAS</strong>
          </span>
          <span>
            <strong>PRECIO TOTAL</strong>
          </span>
          <span>
            <strong>USER ID</strong>
          </span>
        </div>
        {bookings.length ?
          bookings.map(booking =>
            <>
              <div key={booking.id} className='grid-list-bookings' >
                  <span>{booking.bookingNumber}</span>
                  <span>{booking.bookingDate}</span>
                  <span>{booking.experienceName}</span>
                  <span>{booking.placeName}</span>
                  <span>{booking.experienceDate}</span>
                  <span>{booking.experienceHour}</span>
                  <span>{booking.reservedSeats}</span>
                  <span>{booking.totalPrice}</span>
                  <span>{booking.user_id}</span>
              </div>
              <div class="section-buttons">
                {/* <button className="button-link"><Link className='link' to={'/profile/admin/bookingId/' + booking.id}>VER</Link></button> */}
                <button className="bin" value={booking.id} onClick={handleClick}>BORRAR</button>
              </div>
            </>
        ) : <p>No hay ninguna reserva todavía</p>}
      </div>
  )
}

const AllBookingsWrapper = () =>
  <Suspense fallback={<Loading className='page' />}>
    <AllBookings />
  </Suspense>


export default AllBookingsWrapper
