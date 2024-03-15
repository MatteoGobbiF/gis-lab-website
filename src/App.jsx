import { useRef } from "react";
import Article from "./components/Article";
import DescriptionCard from "./components/DescriptionCard";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Team from "./components/Team";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";


import dtm from "./assets/images/Workflow/QGIS/dtm.jpg";
import dusaf from "./assets/images/Workflow/QGIS/dusaf.jpg";
import ndvi from "./assets/images/Workflow/QGIS/ndvi.jpg";

/* import rivers from "./assets/images/Workflow/QGIS/rivers.jpg";
import roads from "./assets/images/Workflow/QGIS/road.jpg";
import faults from "./assets/images/Workflow/QGIS/fault.jpg"; */
function App() {


  return (
    <>
      <Hero>
        <Nav />
      </Hero>
      <Article />
      <Team />
      <Footer />
    </>
  )
}

export default App
