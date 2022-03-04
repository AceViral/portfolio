import "./App.scss";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Foot from "./Components/Foot/Foot";
import Home from "./Components/Home/Home.jsx";
import NavBar from "./Components/NavBar/NavBar";
import Projects from "./Components/Projects/Projects";
import Triangles from "./Components/Triangles/Triangles";

function App() {
   return (
      <div>
         <Home />
         <NavBar />
         <About />
         <Projects />
         <Triangles />
         <Contact />
         <Foot />
      </div>
   );
}

export default App;
