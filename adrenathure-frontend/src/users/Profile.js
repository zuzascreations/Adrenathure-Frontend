import { Routes, Route, Navigate } from 'react-router-dom'
import { useUser } from '../hooks'
import PersonalData from './PersonalData'
import Bookings from '../bookings/Bookings'
import BookingId from '../bookings/BookingId'
import NavProfile from './NavProfile'
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
        <Routes>
          <Route index element={<PersonalData  />} />
          <Route path="editar" element={<PersonalDataEdit />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="bookings/:id" element={<BookingId />} />
          <Route path="admin/*" element={<Admin />} />
        </Routes>
    </section>
  )
}

export default Profile
