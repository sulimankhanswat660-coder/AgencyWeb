import React from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import NewsHero from './Component/NewsHero'
import FeaturedNews from './Component/FeaturedNews'

import Contact from '../../Component/Reuseable/Contact'
import Footer from '../../Component/Footer/Footer'

function News() {
  return (
    <div>
        <Navbar/>
        <NewsHero/>
        <FeaturedNews/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default News