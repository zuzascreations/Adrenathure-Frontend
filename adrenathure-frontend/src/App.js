
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './Header'
import Footer from './footer/Footer'
import Experiences from './experiences/Experiences'
import ExperienceId from './experiences/ExperienceId'
import ExperienceIdReservar from './experiences/ExperienceIdReservar'
import Login from './users/Login'
import Register from './users/Register'
import Portada from './Portada'
import Profile from './users/Profile'
import SidebarPlaces from './places/Places'
import Place from './places/Place'
import SearchBar from './search/SearchBar'
import SearchPage from './search/SearchPage'
import './Loading.css'
import Modal from './Modal'
import About from './About'
import Contact from './contact/Contact'
import YourBooking from './bookings/YourBooking'
import AccountActivated from './AccountActivated'
import TerminosYCondiciones from './footer/TerminosYCondiciones'
import PoliticaDePrivacidad from './footer/PoliticaDePrivacidad'
import PoliticaDeCookies from './footer/PoliticaDeCookies'



function App() {
  return (
    <div className="App">
      <Header />
      <Modal/>
      <Routes>
        <Route path="/experiences/*" element={<><SearchBar /><Experiences /></>} />
        <Route path="experiences/:id" element={<><SearchBar /><ExperienceId /></>}/>
        <Route path="experiences/:id/:date/book" element={<ExperienceIdReservar/>}/>
        <Route path="/login/" element={<Login />} />
        <Route path="/" element={<><SearchBar /><Portada /></>} />
        <Route path="/register/" element={<Register />} />
        <Route path="profile/*" element={<Profile />} />
        <Route path="places" element={<><SearchBar /><SidebarPlaces /></>} />
        <Route path="places/:id" element={<><SearchBar /><Place /></>} />
        <Route path="/yourBooking/:id" element={<YourBooking />} />
        <Route path="/search" element={<><SearchBar /><SearchPage /></>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
	<Route path="/emailValidatePage/:validateCode" element={<AccountActivated />} />
        <Route path="/terminosYCondiciones" element={<TerminosYCondiciones />} />
        <Route path="/politicaDePrivacidad" element={<PoliticaDePrivacidad />} />
        <Route path="/politicaDeCookies" element={<PoliticaDeCookies />} />
        <Route path="*" element={<h2>404 - Not found</h2>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
