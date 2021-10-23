import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import React from "react";

class About extends React.Component {
  render() {
    return (
      <div className="App">
        <div class="row align-items-center">
          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <img
              src="/CoverPicture2.svg"
              width="100%"
              height="auto"
              alt="placeholder"
            ></img>
          </div>
          <div
            class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6"
            style={{ paddingRight: "50px", paddingLeft: "50px" }}
          >
            <div class="coverName">
              About me <br />
            </div>
            <div class="coverDescription">
              Hello, I recent graduated from Hunter college as a with computer
              science degree. I enjoy working on applicaitons and website
              developement as well as exploring new ideas to work on. My goal is
              create applications that people enjoy and want to use on a daily
              basis. I want people to find my programs efficient and helpful to
              their daily lifesytles.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
