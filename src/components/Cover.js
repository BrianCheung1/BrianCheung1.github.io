import React from "react";

class Cover extends React.Component {
  render() {
    return (
      <div className="App">
        <div class="container">
          <div
            class="row align-items-center"
            style={{ marginTop: "50px", marginBottom: "100px" }}
          >
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <h3>
                <div class="coverName">
                  Brian Cheung
                  <br />
                </div>
                <div class="coverDescription">
                    Software Engineer and Webdeveloper
                </div>
              </h3>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <img
                src="/CoverPicture.svg"
                alt="placeholder"
                width="100%"
                height="auto"
              ></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Cover;
