import react from 'react'
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
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import ProtectedRoute from './Components/ProtectedRoute'

function Logout() {
  localStorage.clear()
  return <Navigate to='/' />
}

function registerAndLogout() {
  localStorage.clear()
  return <Register />
}


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
      <Route path='*' element={<Page404 />} />
      <Route path='/admin' element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
      <Route path='/driver' element={<ProtectedRoute><DriverDashboard /></ProtectedRoute>} />
      <Route path='/student' element={<ProtectedRoute><StudentDashboard /></ProtectedRoute>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
