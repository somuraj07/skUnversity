import Page from '@/components/rector'
import Navbar from '@/components/secondNavbar'
import React from 'react'

const Rector = () => {
  return (
    <div>
          <div>
            <Navbar/>
          </div>
          
          <main className="pt-32">
            <Page/>
          </main>
          
        </div>
  )
}

export default Rector
