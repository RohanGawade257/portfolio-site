import React from "react";
import Nevbar from "./components/Nevbar/Nevbar";
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About/About.jsx";
import Services from "./components/Services/services.jsx";
import MyWork from "./components/MyWork/myWork.jsx";
import Contact from "./components/Contact/contact.jsx";

const App = () => {
  return (
    <div>
      <Nevbar/>
      <Hero/>
      <About/>
      <Services/> 
      <MyWork/>
      <Contact/>
    </div>
  )
}

export default App