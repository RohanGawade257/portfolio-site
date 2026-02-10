import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nevbar from "./components/Nevbar/Nevbar";
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About/About.jsx";
import Services from "./components/Services/services.jsx";
import MyWork from "./components/MyWork/myWork.jsx";
import Contact from "./components/Contact/contact.jsx";
import Footer from "./components/Footer/footer.jsx";
import VideoEditing from "./components/myWorkSubFile/videoEditing/videoEditing.jsx";
import GraphicDesign from "./components/myWorkSubFile/graphicDesign/graphicDesign.jsx";
import WebDesign from "./components/myWorkSubFile/webDesign/webDesign.jsx";
import DataEntry from "./components/myWorkSubFile/dataEntry/dataEntry.jsx";
import PhotoEditing from "./components/myWorkSubFile/photoEditing/photoEditing.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Nevbar />

      <Routes>
        {/* Landing page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Services />
              <MyWork />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* Service page */}
        <Route path="/services/video-editing" element={<VideoEditing />}/>
        <Route path="/services/graphics-design" element={<GraphicDesign />} />
        <Route path="/services/web-design" element={<WebDesign />} />
        <Route path="/services/photo-editing" element={<PhotoEditing />} />
        <Route path="/services/data-entry" element={<DataEntry />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
