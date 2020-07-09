import React, { Component } from "react";
import axios from "axios"
const APP_ID = "1eddd451";
const APP_KEY = "9acb3aa12defaeed4a85d8e39cddd73d";

class Breakfast extends Component {
   state = {
    foods: [],
    foodType:['eggs','chicken','salmon','waffles','pancakes','grits','shrimp','steak','pizza','tea','coffee']
  };

  async componentDidMount() {
    let res = await axios.get(
      `https://api.edamam.com/search?q=${this.state.foodType[this.randomIndex()]}+breakfast&to=100&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    this.setState({
      foods: res.data.hits,
    });
    console.log(this.state.foods);
  }

  displayAllFoods = () => {
    return this.state.foods.map((eachFood) => {
      return (
        <li>
        {eachFood.recipe.label}
        <img src={eachFood.recipe.image}/>
      </li> 
      );
    });
  };

  randomIndex = () => {
      let index = Math.floor(Math.random()*this.state.foodType.length)
      return index;
  }

  render() {
    return <div>
      {this.displayAllFoods()}
      </div>
  }
}

export default Breakfast;
 