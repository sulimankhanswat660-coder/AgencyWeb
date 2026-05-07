import React from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import Footer from '../../Component/Footer/Footer'
import Contact from '../../Component/Reuseable/Contact'
import ServiceHero from './Component/ServiceHero'
import ServicesList from './Component/ServicesList'
import ServiceDetails from './Component/ServiceDetails'
function Service() {
  return (
    <div>
        <Navbar/>
        <ServiceHero/>
        <ServicesList/>
        <ServiceDetails/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Service