import React from "react";
import Navigation from "./components/Navigation";
import Cover from "./components/Cover";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Zoom from "react-reveal/Zoom"; // Importing Zoom effect
import Fade from "react-reveal/Fade";
import Particles from "react-particles-js";
import particlesOptions from "./components/Particles.json";

function App() {
  return (
    <div class="App">
      <Navigation />
      <Container fluid>
        <Particles params={particlesOptions} />
        <Cover />
        <Fade bottom>
          <About />
        </Fade>
        <Zoom>
          <Skills />
        </Zoom>
        <Projects />
        <Zoom>
          <Contacts />
        </Zoom>
      </Container>
    </div>
  );
}
export default App;
