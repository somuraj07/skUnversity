import Page from '@/components/register'
import Navbar from '@/components/secondNavbar'
import React from 'react'

const Registar = () => {
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

export default Registar
