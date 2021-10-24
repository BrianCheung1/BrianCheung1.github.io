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

function App() {
  return (
    <div class="App">
      <Navigation />
      <Container fluid>
        <Cover />
        <Zoom>
          <About />
        </Zoom>
        <Zoom>
          <Skills />
        </Zoom>
        <Projects />
        <Contacts />
      </Container>
    </div>
  );
}
export default App;
