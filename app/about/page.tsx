import AboutPage from '@/components/history'
import Navbar from '@/components/secondNavbar'
import React from 'react'

const About = () => {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      
      <main className="pt-32">
        <AboutPage/>
      </main>
      
    </div>
  )
}

export default About
