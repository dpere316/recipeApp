import React, { Component } from "react";

class AboutUs extends Component {
  render() {
    return (
      <div className="aboutus">
        <h1 className="aboutTitle">About Us</h1>
        <div className="usinfo">
          <div className="roy">
            <h1>Roy Gutierrez</h1>
            <p>From: Miami, FL</p>

            <p>Favorite Munchie: Ceviche</p>
            <div className="githubLinkedIn">
              <a href="https://github.com/rmg2995" target="_blank">
                GitHub
              </a>

              <div>|</div>
              <a href="https://www.linkedin.com/in/rmg2995/" target="_blank">
                LinkedIn
              </a>
            </div>
          </div>
          <div className="valerie">
            <h1>Valerie Lee Kang</h1>
            <p>From: Los Angeles, CA</p>
            <p>Favorite Munchie: Korean BBQ</p>
            <div className="githubLinkedIn">
              <a href="https://github.com/vlee13" target="_blank">
                GitHub
              </a>
              <div>|</div>
              <a href="https://www.linkedin.com/in/vlee13/" target="_blank">
                LinkedIn
              </a>
            </div>
          </div>
          <div className="daniel">
            <h1>Daniel Perez</h1>
            <p>From: Miami, FL</p>
            <p>Favorite Munchie: Chicken Vesuvio</p>
            <div className="githubLinkedIn">
              <a href="https://github.com/dpere316" target="_blank">
                GitHub
              </a>
              <div>|</div>
              <a href="https://www.linkedin.com/in/dperez316/" target="_blank">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
