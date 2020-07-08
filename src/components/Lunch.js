import React, { Component } from "react";
import axios from "axios";
const APP_ID = "1eddd451";
const APP_KEY = "9acb3aa12defaeed4a85d8e39cddd73d";

class Lunch extends Component {
  
  state = {
    foods: [],
  };

  async componentDidMount() {
    let res = await axios.get(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`
    );
    this.setState({
      foods: res.data.hits
    });
    console.log(this.state.foods)
  }

  displayAllBeers = () => {
    return this.state.foods.map((eachFood) => {
      return (
          
          <li>{eachFood.recipe.label}</li>
      )
    });
  };

  render() {
    return <div>
    {this.displayAllBeers()}
    </div>;
  }
}

export default Lunch;
