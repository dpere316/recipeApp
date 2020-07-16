import Breakfast from "./Breakfast";
import Lunch from "./Lunch";
import Dinner from "./Dinner";

import React, { Component } from "react";

class Meals extends Component {
  render() {
    return (
      <div className="meals">
        <Breakfast />
        <Lunch />
        <Dinner />
      </div>
    );
  }
}

export default Meals;
