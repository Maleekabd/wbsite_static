import AboutUs from '@/components/AboutUs'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
// import Footer from "@/components/Footer"

const Layout = ({ children, pageTitle }) => {

  const router = useRouter();
  const TentangKami = router.pathname;

  return (
    <>
      <Head>
        <title>{pageTitle ? pageTitle + " - Malteclab" : "Malteclab"}</title>
      </Head>
      <Navbar />
      <main>
        {children}
      </main>
      {TentangKami === "/" ? <AboutUs /> : ""}
      <Footer />
    </>
  )
}
export default Layout
