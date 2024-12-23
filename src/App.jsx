import About from "./section/About";
import Contact from "./section/Contact";
import Experience from "./section/Experience";
import Footer from "./section/Footer";
import Hero from "./section/Hero";
import Navbar from "./section/Navbar";
import Project from "./section/Project";

const App =()=>{
  return (
    <main>
      <Navbar/>
      <Hero/>
      <About/>
      <Project/>
      <Experience/>
      <Contact/>
      <Footer/>
    </main>
  );
}

export default App;