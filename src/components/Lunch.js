import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
<<<<<<< HEAD
=======
import "bulma/css/bulma.css";
>>>>>>> daniel
const APP_ID = "1eddd451";
const APP_KEY = "9acb3aa12defaeed4a85d8e39cddd73d";

class Lunch extends Component {
  state = {
    foods: [],
    foodType: [
      "eggs",
      "chicken",
      "salmon",
      "ramen",
      "ribeye",
      "pork",
      "salad",
      "pies",
      "soup",
      "rice",
      "steak",
      "pizza",
    ],
  };

  async componentDidMount() {
    let res = await axios.get(
      `https://api.edamam.com/search?q=${
<<<<<<< HEAD
        this.state.foodType[this.randomIndex()]
=======
      this.state.foodType[this.randomIndex()]
>>>>>>> daniel
      }+lunch&to=100&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    this.setState({
      foods: res.data.hits,
    });
    console.log(this.state.foods);
  }

  displayAllFoods = () => {
    return this.state.foods.map((eachFood) => {
      return (
<<<<<<< HEAD
        <li>
          {eachFood.recipe.label}
          <img src={eachFood.recipe.image} />
        </li>
=======
        <div>
          <div className="column">
            <li>
              {eachFood.recipe.label}
              <br />
              <img src={eachFood.recipe.image} />
            </li>
          </div>
        </div>
>>>>>>> daniel
      );
    });
  };

  randomIndex = () => {
    let index = Math.floor(Math.random() * this.state.foodType.length);
    return index;
  };

  render() {
    return <div>
      <div className="columns"> {this.displayAllFoods()}</div>
      <div className="columns"> {this.displayAllFoods()}</div>
    </div>
    ;
  }
}

export default Lunch;
