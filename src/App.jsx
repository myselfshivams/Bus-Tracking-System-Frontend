import './App.css'
import Home from './Landing/Home'
import About from './Landing/About'
import Service from './Landing/Service'
import Contact from './Landing/Contact'
import Team from './Landing/Team'
import AdminDashboard from './DashBoard/AdminDashboard'
import DriverDashboard from './DashBoard/DriverDashboard'
import StudentDashboard from './DashBoard/StudentDashboard'
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
      <Route path='/admin' element={<AdminDashboard />} />
      <Route path='/driver' element={<DriverDashboard />} />
      <Route path='/student' element={<StudentDashboard />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
