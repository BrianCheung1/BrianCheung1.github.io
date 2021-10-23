import React from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav"
import Cover from "./components/Cover"
import About from "./components/About"
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <main>
      <Nav/>
      <Cover/>
      <About/>
    </main>
  );
}
export default App;
