import "./App.css";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import Characteristics from "./components/Characteristics";
import Highlitghts from "./components/Highlitghts";
import Interactives from "./components/Interactives";
import NavBar from "./components/NavBar";
import Safety from "./components/Safety";


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
    </div>
  )
  
}

export default App;
