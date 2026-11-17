import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/sections/Navbar'
import Footer from '../components/sections/Footer'

const PublicLayout = () => {
  return (
    <div className="min-h-screen bg-app-bg">
      <Navbar/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default PublicLayout
