import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../Component/Navbar/Navbar'
import Footer from '../../Component/Footer/Footer'
import AboutHero from './Component/AboutHero'
import Contact from '../../Component/Reuseable/Contact'
import AboutCompany from './Component/AboutCompany'
import OurMission from './Component/OurMission'
import OurTeam from './Component/OurTeam'

function About() {
    
  return (
    <div>
      <Navbar/>
      <AboutHero/>
      <AboutCompany/>
      <OurMission/>
      <OurTeam/>
      <Contact/>
      <Footer/>

    </div>
  )
}

export default About