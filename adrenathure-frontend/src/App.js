import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Experiences from './Experiences'
import Login from './Login'
import Register from './Register'


function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/experiences/" element={<Experiences />} />
        <Route path="/login/" element={<Login />} />
        <Route path="/register/" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
