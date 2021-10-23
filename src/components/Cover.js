import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import React from "react";

class Cover extends React.Component {
  render() {
    return (
      <div className="App">
        <div class="container">
          <div class="row align-items-center" style={{ marginTop: "30px" }}>
            <div class="col-5" style={{ textAlign: "left" }}>
              Brian Cheung <br />
              Software Engineer and Webdeveloper
            </div>
            <div class="col-6">
              <img src="/CoverPicture.svg" alt="placeholder"></img>
            </div>
          </div>
          </div>
      </div>
    );
  }
}
export default Cover;
