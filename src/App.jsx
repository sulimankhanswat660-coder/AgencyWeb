import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/AboutUs/About";
import Service from "./pages/Services/Service";
import { Box, Container } from "@mui/material";
import News from "./pages/News/News";
function App() {
  return (
    <Container maxWidth={"xl"} disableGutters>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service/>}/>
          <Route path="/news" element={<News/>}/>
          <Route path="/news" element={<Service/>}/>
        </Routes>
      </BrowserRouter>
     </Container>
  );
}

export default App;
