import React, { Component } from "react";
import { Link } from "react-router-dom";
class EthnicNav extends Component {
  render() {
    return (
      <div>
        <Link to="/ethnicFood/Mexican">Mexican!</Link>
        <Link to="/ethnicFood/American">American!</Link>
      </div>
    );
  }
}

export default EthnicNav;
