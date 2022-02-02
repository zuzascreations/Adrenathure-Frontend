import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './Header';
import SearchBar from './SearchBar';
import Footer from './Footer';
import Portada from './Portada';
import Experiences from './Experiences/Subroutes';
import Login from './Login';
import Register from './Register';
import { Suspense } from 'react';
import './Loading.css'
import Loading from './Loading'
import PersonalData from './PersonalData';


function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/experiences/" element={<Suspense fallback={<Loading />} className='loading'><Experiences /></Suspense>} />
        <Route path="/login/" element={<Login />} />
        <Route path="/register/" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
