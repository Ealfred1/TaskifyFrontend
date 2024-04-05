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
import CategoryDetailPage from './pages/CategoryDetailPage'
import CalendarPage from './pages/CalendarPage'
import SearchPage from './pages/SearchPage'
import ProjectPage from './pages/ProjectPage'
import SettingPage from './pages/SettingPage'
import RequireAuth from './components/RequireAuth'


const App = () => {
  
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
            <Route path='/category/:id' element={<CategoryDetailPage />} />
            <Route path='/calendar' element={<CalendarPage />} />
            <Route path='/search' element={<SearchPage />} />
            <Route path='/projects' element={<ProjectPage />} />
            <Route path='/settings' element={<SettingPage />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
