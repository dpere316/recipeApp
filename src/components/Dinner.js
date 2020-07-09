import React, { Component } from "react";
import axios from "axios";
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

class Dinner extends Component {
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
      `https://api.edamam.com/search?q=${this.state.foodType[this.randomIndex()]}+dinner&to=10&app_id=${APP_ID}&app_key=${APP_KEY}`
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
        <img
            style={{ width: "100px" }}
            src={eachFood.recipe.image}
            alt={eachFood.recipe.label}
          />
          <p>{eachFood.recipe.label}</p>
        </div>
      );
    });
  };

  randomIndex = () => {
      let index = Math.floor(Math.random()*this.state.foodType.length)
      return index;
  }

  render() {
    return <div>
    <h1>Dinner</h1>
     <Slider {...settings}>{this.displayAllFoods()}</Slider> 
      </div>
  }
}
export default Dinner;
