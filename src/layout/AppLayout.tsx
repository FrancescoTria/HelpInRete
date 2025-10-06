import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './Navbar'
import FooterBar from './FooterBar'
import SkipToContent from './SkipToContext'
import BackgroundDeco from './BackgroundDeco'

const AppLayout: React.FC = () => {
  return (
    <>
      <SkipToContent />
      <NavBar />
      <BackgroundDeco />
      <main id="main" className="section" style={{ position: 'relative', zIndex: 1 }}>
        <div className="container">
          <Outlet />
        </div>
      </main>
      <FooterBar />
    </>
  )
}

export default AppLayout
