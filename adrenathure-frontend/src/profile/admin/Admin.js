import { Routes, Route, Navigate } from 'react-router-dom'
import { useUser } from '../../hooks'
import ErrorBoundary from '../../ErrorBoundary'
import AllExperiences from './AllExperiences'
import EditExperience from './EditExperience'
import CreateExperience from './CreateExperience'
import AllBookings from './AllBookings'
import AllPlaces from './AllPlaces'
import EditPlace from './EditPlace'
import CreatePlace from './CreatePlace'
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
          <Route path="allPlaces" element={<AllPlaces />} />
          <Route path="editPlace/:id" element={<EditPlace />} />
          <Route path="newPlace" element={<CreatePlace />} />
        </Routes>
      </ErrorBoundary>
    </section>
  )
}

export default Admin