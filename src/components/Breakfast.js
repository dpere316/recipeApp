import React, { Component } from "react";
import axios from "axios"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
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
class Breakfast extends Component {
   state = {
    foods: [],
    foodType:['eggs','yogurt','waffles','pancakes','grits','shrimp','steak','pizza','tea','coffee','juice']
  };

  async componentDidMount() {
    let res = await axios.get(
      `https://api.edamam.com/search?q=${this.state.foodType[this.randomIndex()]}+breakfast&to=10&app_id=${APP_ID}&app_key=${APP_KEY}`
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
          <p>{eachFood.recipe.label}</p>
        </div>
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
    <h1>Breakfast</h1>
     <Slider {...settings}>{this.displayAllFoods()}</Slider> 
      </div>
  }
}

export default Breakfast;
 