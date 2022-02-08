import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Experiences from './Experiences'
import ExperienceId from './ExperienceId'
import Login from './Login'
import Register from './Register'
import Portada from './Portada'
import Profile from './profile/Profile'
import SidebarPlaces from './places/Places'
import Place from './places/Place'
import SidebarExperiencesPlaceId from './places/SidebarExperiencesPlaceId'
import SearchBar from './SearchBar'
import SearchPage from './SearchPage'
import About from '.about/About'
import Contact from '.contact/Contact'
import './Loading.css'



function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Portada />} />
        <Route path="/experiences/*" element={<Experiences />} />
        <Route path="experiences/:id" element={<ExperienceId />} />
        <Route path="/login/" element={<Login />} />
        <Route path="/" element={<><SearchBar /><Portada /></>} />
        <Route path="/register/" element={<Register />} />
        <Route path="profile/*" element={<Profile />} />
        <Route path="places" element={<SidebarPlaces />} />
        <Route path="places/:id" element={<Place />} />
        <Route path="places/:id" element={<SidebarExperiencesPlaceId />} />
        <Route path="/:place&:price&:date" element={<SearchPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h2>404 - Not found</h2>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
