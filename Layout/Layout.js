import Navbar from '@/components/Navbar'
import React from 'react'
// import Footer from "@/components/Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
    </>
  )
}
export default Layout
