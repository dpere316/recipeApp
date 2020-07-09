import React, { Component } from "react";
<<<<<<< HEAD
import axios from "axios";
=======
import axios from "axios"
>>>>>>> master
const APP_ID = "1eddd451";
const APP_KEY = "9acb3aa12defaeed4a85d8e39cddd73d";

class Breakfast extends Component {
<<<<<<< HEAD
  state = {
    foods: [],
    foodType: [
      "eggs",
      "chicken",
      "salmon",
      "waffles",
      "pancakes",
      "grits",
      "shrimp",
      "steak",
      "pizza",
      "tea",
      "coffee",
    ],
=======
<<<<<<< HEAD
   state = {
    foods: [],
    foodType:['eggs','chicken','salmon','waffles','pancakes','grits','shrimp','steak','pizza','tea','coffee']
>>>>>>> master
  };

  async componentDidMount() {
    let res = await axios.get(
<<<<<<< HEAD
      `https://api.edamam.com/search?q=${
        this.state.foodType[this.randomIndex()]
      }+breakfast&to=100&app_id=${APP_ID}&app_key=${APP_KEY}`
=======
      `https://api.edamam.com/search?q=${this.state.foodType[this.randomIndex()]}+breakfast&to=100&app_id=${APP_ID}&app_key=${APP_KEY}`
>>>>>>> master
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
<<<<<<< HEAD
          {eachFood.recipe.label}
          <img src={eachFood.recipe.image} />
        </li>
=======
        {eachFood.recipe.label}
        <img src={eachFood.recipe.image}/>
      </li> 
>>>>>>> master
      );
    });
  };

  randomIndex = () => {
<<<<<<< HEAD
    let index = Math.floor(Math.random() * this.state.foodType.length);
    return index;
  };

  render() {
    return <div>{this.displayAllFoods()}</div>;
=======
      let index = Math.floor(Math.random()*this.state.foodType.length)
      return index;
  }

=======
>>>>>>> valerie
  render() {
    return <div>
      {this.displayAllFoods()}
      </div>
>>>>>>> master
  }
}

export default Breakfast;
 