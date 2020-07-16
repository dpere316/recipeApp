import React, { Component } from "react";

class AboutUs extends Component {
  render() {
    return (
      <div className="aboutus">
        <h1 className="aboutTitle">About Us</h1>
        <div className="usinfo">
          <div className="roy">
            <h1>Roy Gutierrez</h1>
            <li>From: FL</li>

            <li>Favorite Munchie: Ceviche</li>
            <div className="githubLinkedIn">
              <div>GitHub</div>
              <div>|</div>
              <div>LinkedIn</div>
            </div>
          </div>
          <div className="valerie">
            <h1>Valerie Lee</h1>
            <li>From: Los Angeles, CA</li>
            <li>Favorite Munchie: Pho</li>
            <div className="githubLinkedIn">
              <div>GitHub</div>
              <div>|</div>
              <div>LinkedIn</div>
            </div>
          </div>
          <div className="daniel">
            <h1>Daniel Perez</h1>
            <li>From: FL</li>
            <li>Favorite Munchie: Chicken Vesuvio</li>
            <div className="githubLinkedIn">
              <div>GitHub</div>
              <div>|</div>
              <div>LinkedIn</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
