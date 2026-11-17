import React from 'react'
import Hero from '../components/sections/Hero'
import Features from '../components/sections/Features'
import HowItWorks from '../components/sections/HowItWorks'
import Pricing from '../components/sections/Pricing'
import Contact from '../components/sections/Contact'

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Features/>
      <HowItWorks/>
      <Pricing/>
      <Contact/>
    </div>
  )
}

export default LandingPage
