import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Contact from './pages/Contact'
import Team from './pages/Team'
import Page404 from './pages/Page404'
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
      <Route path='/404' element={<Page404 />} />
      <Route path='/admin' element={<AdminDashboard />} />
      <Route path='/driver' element={<DriverDashboard />} />
      <Route path='/student' element={<StudentDashboard />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
