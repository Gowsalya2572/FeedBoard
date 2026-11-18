
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PublicLayout from './layout/PublicLayout'
import LandingPage from './pages/LandingPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import AuthLayout from './layout/AuthLayout'
import ProtectedRoutes from './routes/ProtectedRoutes'
import DashboardLayout from './layout/DashboardLayout'
import DashboardPage from './pages/DashboardPage'
import NotFoundPage from './pages/NotFoundPage'
import ProfilePage from './pages/ProfilePage'

const App = () => {
  return (
    <Routes>

      <Route element={<PublicLayout/>}>
       <Route path='/' element={<LandingPage />}/>
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage/>}/>
      </Route>

      <Route
        path="/dashboard"
        element={
          <ProtectedRoutes>
            <DashboardLayout />
          </ProtectedRoutes>
        }
      >
        <Route index element={<DashboardPage />} />
        <Route path='profile' element={<ProfilePage />}/>
     </Route>

     <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App



