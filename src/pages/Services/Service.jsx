import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";
import Contact from "../../Component/Reuseable/Contact";
import ServiceHero from "./Component/ServiceHero";
import ServicesList from "./Component/ServicesList";
import ServiceDetails from "./Component/ServiceDetails";
import Process from "./Component/Process";
import Portfolio from "./Component/Portfolio";
import Testimonial from "./Component/Testimonal";
function Service() {
  return (
    <div>
      <Navbar />
      <ServiceHero />
      <ServicesList />
      <ServiceDetails />
      <Process />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default Service;
