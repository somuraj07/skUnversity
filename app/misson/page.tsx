import VisionMissionPage from '@/components/misson'
import Navbar from '@/components/secondNavbar'
import React from 'react'

const Mission = () => {
  return (
    <div>
          <div>
            <Navbar/>
          </div>
          
          <main className="pt-32">
            <VisionMissionPage/>
          </main>
          
        </div>


      
    
  )
}

export default Mission
