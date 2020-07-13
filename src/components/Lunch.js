import React, { Component } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
// const APP_ID = "1949bcdc";
// const APP_KEY = "b99569c224fcfecca6f202946bed7bfe";
const APP_ID = "027c69d3";
const APP_KEY = "06c10b8536afafcb35d471d1e71b262e";
const settings = {
  dots: true,
  infinte: true,
  speed: 10,
  arrows: true,
  slidesToScroll: 5,
  slidesToShow: 5,
  className: "slides",
};

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
        this.state.foodType[this.randomIndex()]
        // this.state.foodType.join("%20")
      }+lunch&to=15&app_id=${APP_ID}&app_key=${APP_KEY}`
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
            <Link to={`/foods/${eachFood.recipe.label}`}></Link>
            <img src={eachFood.recipe.image} alt={eachFood.recipe.label} />
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
      <div className="randomFood">
        <div>
          <h1>Lunch</h1>
        </div>
        <div>
          <Slider {...settings}> {this.displayAllFoods()} </Slider>
        </div>
      </div>
    );
  }
}

export default Lunch;
