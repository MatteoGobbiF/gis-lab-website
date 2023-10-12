import Article from "./components/Article";
import DescriptionCard from "./components/DescriptionCard";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Team from "./components/Team";
import Workflow from "./components/Workflow";

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
      <Workflow>
        <h1 className="text-center my-10">Workflow</h1>
        <p></p>
        <DescriptionCard text={"DTM (Digital Terrain Model) The Digital Terrain Model is a digital representation of the Earth's surface, capturing the elevation or height values of the terrain. It provides a detailed three-dimensional description of the topography, including mountains, valleys, ridges, and other surface features."} img={dtm} />
        <DescriptionCard text={"DTM (Digital Terrain Model) The Digital Terrain Model is a digital representation of the Earth's surface, capturing the elevation or height values of the terrain. It provides a detailed three-dimensional description of the topography, including mountains, valleys, ridges, and other surface features."} img={dusaf} />
        <DescriptionCard text={"DTM (Digital Terrain Model) The Digital Terrain Model is a digital representation of the Earth's surface, capturing the elevation or height values of the terrain. It provides a detailed three-dimensional description of the topography, including mountains, valleys, ridges, and other surface features."} img={ndvi} />
      </Workflow>
      <Team />
    </>
  )
}

export default App
