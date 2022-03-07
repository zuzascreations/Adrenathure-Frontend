import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Experiences from './Experiences'
import ExperienceId from './ExperienceId'
import ExperienceIdReservar from './ExperienceIdReservar'
import Login from './Login'
import Register from './Register'
import Portada from './Portada'
import Profile from './profile/Profile'
import SidebarPlaces from './places/Places'
import Place from './places/Place'
import SearchBar from './SearchBar'
import SearchPage from './SearchPage'
import './Loading.css'
import Modal from './Modal'
import About from './About'
import Contact from './Contact'



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
        <Route path="/" element={<><SearchBar/><Portada /></>} />
        <Route path="/register/" element={<Register />} />
        <Route path="profile/*" element={<Profile />} />
        <Route path="places" element={<><SearchBar /><SidebarPlaces /></>} />
        <Route path="places/:id" element={<><SearchBar /><Place /></>} />
        <Route path="/:place&:price&:date" element={<><SearchBar /><SearchPage /></>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h2>404 - Not found</h2>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
