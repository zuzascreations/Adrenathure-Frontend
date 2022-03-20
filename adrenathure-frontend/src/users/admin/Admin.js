import { Routes, Route, Navigate } from 'react-router-dom'
import { useUser } from '../../hooks'
import ErrorBoundary from '../../ErrorBoundary'
import AllExperiences from '../../experiences/AllExperiences'
import EditExperience from '../../experiences/EditExperience'
import CreateExperience from '../../experiences/CreateExperience'
import AllBookings from '../../bookings/AllBookings'
import BookingId from '../../bookings/BookingId'
import AllPlaces from '../../places/AllPlaces'
import EditPlace from '../../places/EditPlace'
import CreatePlace from '../../places/CreatePlace'
import NavAdmin from './NavAdmin'

function Admin() {
  const user = useUser()
  if (!user) {
    return <Navigate to="/login" />
  }

  return (
    <section >
      <NavAdmin />
      <ErrorBoundary fallback="Navprofile in Profile is failing">
        <Routes>
          <Route index element={<AllExperiences />} />
          <Route path="editExperience/:id" element={<EditExperience />} />
          <Route path="newExperience" element={<CreateExperience />} />
          <Route path="allBookings" element={<AllBookings />} />
          <Route path="bookingId/:id" element={<BookingId />} />
          <Route path="allPlaces" element={<AllPlaces />} />
          <Route path="editPlace/:id" element={<EditPlace />} />
          <Route path="newPlace" element={<CreatePlace />} />
        </Routes>
      </ErrorBoundary>
    </section>
  )
}

export default Admin