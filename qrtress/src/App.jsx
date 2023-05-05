import "./App.css";
import Banner from "./components/Banner";
import Banner2 from "./components/Banner2";
import Categories from "./components/Categories";
import Characteristics from "./components/Characteristics";
import Comands from "./components/Comands";
import Diferentials from "./components/Diferentials";
import Highlitghts from "./components/Highlitghts";
import Interactives from "./components/Interactives";
import NavBar from "./components/NavBar";
import Safety from "./components/Safety";
import Highs2 from "./components/Highs2"
import Premium from "./components/Premium";


function App() {
  return(
    <div>
      <NavBar />
      <Banner />
      <Categories />
      <Safety />
      <Interactives />
      <Characteristics />
      <Highlitghts />
      <Diferentials />
      <Banner2 />
      <Comands />
      <Highs2 />
      <Premium />
    </div>
  )
  
}

export default App;
