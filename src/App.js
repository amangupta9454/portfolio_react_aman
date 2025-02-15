import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Skill from "./components/Skill";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Qualification from "./components/Qualification";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Home></Home>
      <SocialLinks />
      <About />
      <Skill />
      <Experience />
      <Projects />
      <Qualification />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
