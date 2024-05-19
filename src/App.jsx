import './App.css'
import Home from './Landing/Home'
import About from './Landing/About'
import Service from './Landing/Service'
import Contact from './Landing/Contact'
import Team from './Landing/Team'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/services' element={<Service />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/teams' element={<Team />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
