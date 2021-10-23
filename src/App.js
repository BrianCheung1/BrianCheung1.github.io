import React from "react";
import Navigation from "./components/Navigation";
import Cover from "./components/Cover";
import About from "./components/About";
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div class="App">
      <Navigation />
      <Container fluid>
        <Cover />
        <About />
        <Skills />
        <Projects />
      </Container>
    </div>
  );
}
export default App;
