import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import React from "react";

class About extends React.Component {
  render() {
    return (
      <div className="App">
          <div class="row align-items-center" style={{ marginTop: "30px" }}>
            <div class="col-6">
              <img src="/CoverPicture2.svg" alt="placeholder"></img>
            </div>
            <div class="col-5" style={{ textAlign: "right" }}>
              About me <br />
              Hello, I recent graduated from Hunter college as a with computer
              science degree. I enjoy working on applicaitons and website
              developement as well as exploring new ideas to work on. My goal is
              create applications that people enjoy and want to use on a daily
              basis. I want people to find my programs efficient and helpful to
              their daily lifesytles.
            </div>
          </div>
      </div>
    );
  }
}
export default About;
