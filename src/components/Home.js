import React, { Component } from "react";
import Navbar from "./navbar";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Lunch />
      </div>
    );
  }
}

export default Home;
