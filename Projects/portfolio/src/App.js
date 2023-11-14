import Navbar from "./components/NavBar/Navbar";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Project from "./components/Projects/Project";
import Skill from "./components/Skills/Skill";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Project />
      <Skill />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;


