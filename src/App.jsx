import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import LandingLayout from './components/Landing/LandingLayout.jsx'
import Homepage from './pages/Homepage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import Dashboard from './pages/DashboardPage'
import TaskPage from './pages/TaskPage'
import CategoryPage from './pages/CategoryPage'
import RequireAuth from './components/RequireAuth'


function App() {
  
  return (
    <div className="w-full h-screen">
      <Routes>
        <Route path='/' element={<LandingLayout />}>
          <Route index element={<Homepage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
        </Route>
        
        <Route element={<RequireAuth />}>
          <Route element={<Layout />}>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/task' element={<TaskPage />} />
            <Route path='/category' element={<CategoryPage />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
