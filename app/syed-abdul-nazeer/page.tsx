import Page from '@/components/chancellor'
import Navbar from '@/components/secondNavbar'
import React from 'react'

const Chanceler = () => {
  return (
    <div>
       <div>
            <div>
              <Navbar/>
            </div>
            
            <main className="pt-32">
              <Page/>
            </main>
            
          </div>
    </div>
  )
}

export default Chanceler
