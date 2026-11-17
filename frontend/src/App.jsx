
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PublicLayout from './layout/PublicLayout'
import LandingPage from './pages/LandingPage'

const App = () => {
  return (
    <Routes>
      <Route element={<PublicLayout/>}>
       <Route path='/' element={<LandingPage />}/>
      </Route>
    </Routes>
  )
}

export default App



