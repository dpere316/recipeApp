import React, { Component } from "react";
<<<<<<< HEAD
import axios from "axios";
const APP_ID = "1eddd451";
const APP_KEY = "9acb3aa12defaeed4a85d8e39cddd73d";
=======
import axios from "axios"
<<<<<<< HEAD

>>>>>>> 28f52bc5a4ab9b7d2d83dcd47644776ae95219ba

class Dinner extends Component {
=======
const APP_ID = "1eddd451";
const APP_KEY = "9acb3aa12defaeed4a85d8e39cddd73d";

class Dinner extends Component {
  
  state = {
    foods: [],
    foodType:['eggs','chicken','salmon','ramen','ribeye','pork','salad', 'pies','soup','rice','steak','pizza']
  };

  async componentDidMount() {
    let res = await axios.get(
      `https://api.edamam.com/search?q=${this.state.foodType[this.randomIndex()]}+lunch&to=100&app_id=${APP_ID}&app_key=${APP_KEY}`
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

>>>>>>> daniel
  render() {
    return <div>
      {this.displayAllFoods()}
      </div>
  }
}

export default Dinner;
