import Navbar from '@/components/secondNavbar'
import Page from '@/components/vice'
import React from 'react'

const ViceChanceler = () => {
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

export default ViceChanceler
