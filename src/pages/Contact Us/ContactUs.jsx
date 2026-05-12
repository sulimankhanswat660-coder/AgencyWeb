import React from 'react'
import Navbar from "../../Component/Navbar/Navbar";
import ContactHero from './Component/ContactHero';
import ContactPage from './Component/ContactPage';

import Contact from '../../Component/Reuseable/Contact'
import Footer from "../../Component/Footer/Footer";
import ContactForm from './Component/ContactForm';
import FooterTop from './Component/FooterTop';

function ContactUs() {
  return (
    <div>
        <Navbar/>
        <ContactHero/>
        <FooterTop/>
        <ContactPage/>
        <ContactForm/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default ContactUs