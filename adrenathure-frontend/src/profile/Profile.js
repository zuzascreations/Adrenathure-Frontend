import { Routes, Route, Navigate } from 'react-router-dom'
import { useUser } from '../hooks'
import PersonalData from './PersonalData'
import Bookings from './Bookings'
import BookingId from './BookingId'
import NavProfile from './NavProfile'
import ErrorBoundary from '../ErrorBoundary'
import PersonalDataEdit from './PersonalDataEdit'
import Admin from './admin/Admin'

function Profile() {
  const user = useUser()
  if (!user) {
    return <Navigate to="/login" />
  }

  return (
    <section className="profile">
      <NavProfile />
      <ErrorBoundary fallback="Navprofile in Profile is failing">
        <Routes>
          <Route index element={<PersonalData />} />
          <Route path="editar" element={<PersonalDataEdit />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="bookings/:id" element={<BookingId />} />
          <Route path="admin/*" element={<Admin />} />
        </Routes>
      </ErrorBoundary>
    </section>
  )
}

export default Profile