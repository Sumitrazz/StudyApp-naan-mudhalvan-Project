import React from 'react'

import NavBar from './components/admin/common/NavBar'
import Footer from './components/admin/common/footer'
import Home from './components/admin/common/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/admin/common/Register';
import Login from './components/admin/common/Login';

const App = () => {
  return (
    <Router>
    <div className="flex flex-col min-h-screen ">
      <NavBar/>
      <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />

          {/* Protected routes can go here, if needed */}
          {/* Example of a protected route */}
          
        </Routes>
      <Footer/>
    </div>
    </Router>
  )
}

export default App