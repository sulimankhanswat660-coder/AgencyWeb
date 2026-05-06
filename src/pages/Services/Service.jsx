import React from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import Footer from '../../Component/Footer/Footer'
import Contact from '../../Component/Reuseable/Contact'
import ServiceHero from './Component/ServiceHero'
import ServicesList from './Component/ServicesList'
function Service() {
  return (
    <div>
        <Navbar/>
        <ServiceHero/>
        <ServicesList/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Service