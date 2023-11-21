import "./App.css";

import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Skills />
      <About />
      <Projects />
      <Testimonial />
      <Footer />
    </>
  );
}

export default App;
