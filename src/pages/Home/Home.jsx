import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";
import HeroSection from "../Home/Components/herosection/HeroSection";
import { Box } from "@mui/material";
import AboutSection from "./Components/herosection/AboutSection";
import ServiceSection from "./Components/herosection/ServiceSection";
import Portfolio from "./Components/herosection/Portfolio";

import Contact from "../../Component/Reuseable/Contact";
import Testimonials from "./Components/herosection/Testimonials";
const Home = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <Portfolio />
      <Testimonials/>
      <Contact />

      <Footer />
    </Box>
  );
};

export default Home;
