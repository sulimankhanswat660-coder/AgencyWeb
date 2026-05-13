import React from 'react'
import Navbar from "../../Component/Navbar/Navbar";
import ContactHero from './Component/ContactHero';
import FooterTop from './Component/FooterTop';

import ContactForm from './Component/ContactForm';

import Contact from '../../Component/Reuseable/Contact'
import Footer from "../../Component/Footer/Footer";

function ContactUs() {
  return (
    <div>
        <Navbar/>
        <ContactHero/>
        <FooterTop/>
        <ContactForm/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default ContactUs