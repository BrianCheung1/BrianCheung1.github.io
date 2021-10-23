import React from "react";
import Navigation from "./components/Navigation";
import Cover from "./components/Cover"
import About from "./components/About"
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div class="App">
      <Navigation />
      <Cover />
      <About />
    </div>
  );
}
export default App;
