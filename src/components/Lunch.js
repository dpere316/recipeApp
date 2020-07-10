import React, { Component } from "react";
import axios from "axios";
<<<<<<< HEAD
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
const APP_ID = "1eddd451";
const APP_KEY = "9acb3aa12defaeed4a85d8e39cddd73d";
=======
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../App.css'
const APP_ID = "b479ca7f";
const APP_KEY = "1091d11a059bf224db39af98bca9540f	";
const settings ={
  dots:false,
  infinte:true,
  speed:10,
  arrows:true,
  slidesToScroll:1,
  slidesToShow:5,
  className:'slides'
}
>>>>>>> 11c598170116984f0396337ba8e4585f3213358b

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
      }+lunch&to=10&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    this.setState({
      foods: res.data.hits,
    });
    // console.log(this.state.foods);
  }

  displayAllFoods = () => {
    return this.state.foods.map((eachFood) => {
<<<<<<< HEAD
      return <div></div>;
=======
      return (
        <div className="container">
        <img
            style={{ width: "100px" }}
            src={eachFood.recipe.image}
            alt={eachFood.recipe.label}
          />
          <p>{eachFood.recipe.label}</p>
        </div>
   
      );
>>>>>>> 11c598170116984f0396337ba8e4585f3213358b
    });
  };

  randomIndex = () => {
    let index = Math.floor(Math.random() * this.state.foodType.length);
    return index;
  };

  render() {
    return (
<<<<<<< HEAD
      <div>
        <div className="columns"> {this.displayAllFoods()}</div>
      </div>
=======
        <div>
        <h1>Lunch</h1>
        <Slider {...settings}> {this.displayAllFoods()} </Slider>
        </div>
  
>>>>>>> 11c598170116984f0396337ba8e4585f3213358b
    );
  }
}

export default Lunch;
