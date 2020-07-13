import React, { Component } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
//
const APP_ID2 = "027c69d3";
const APP_KEY2 = "06c10b8536afafcb35d471d1e71b262e";

const settings = {
  dots: true,
  infinte: true,
  speed: 10,
  arrows: true,
  slidesToScroll: 5,
  slidesToShow: 5,
  className: "slides",
};
class Breakfast extends Component {
  state = {
    foods: [],
    foodType: [
      "eggs",
      "yogurt",
      "waffles",
      "pancakes",
      "grits",
      "shrimp",
      "steak",
      "pizza",
      "tea",
      "coffee",
      "juice",
    ],
  };

  async componentDidMount() {
    let res = await axios.get(
      `https://api.edamam.com/search?q=${
        this.state.foodType[this.randomIndex()]
      }+breakfast&to=15&app_id=${APP_ID2}&app_key=${APP_KEY2}`
    );
    this.setState({
      foods: res.data.hits,
    });
    // console.log(this.state.foods);
  }

  displayAllFoods = () => {
    return this.state.foods.map((eachFood) => {
      return (
        <div className="container">
          <div className="child">
            <img
              style={{ width: "100px" }}
              src={eachFood.recipe.image}
              alt={eachFood.recipe.label}
            />
            <Link to={`/foods/${eachFood.recipe.label}`}>
              <p>{eachFood.recipe.label}</p>
            </Link>
          </div>
        </div>
      );
    });
  };

  randomIndex = () => {
    let index = Math.floor(Math.random() * this.state.foodType.length);
    return index;
  };

  render() {
    return (
      <div>
        <h1>Breakfast</h1>
        <Slider {...settings}>{this.displayAllFoods()}</Slider>
      </div>
    );
  }
}

export default Breakfast;
