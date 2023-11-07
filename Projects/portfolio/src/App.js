import Navbar from "./components/NavBar/Navbar";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Project from "./components/Projects/Project";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Project />
    </div>
  );
}

export default App;
