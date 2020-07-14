import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../Search/navbar";
// const APP_ID = "1eddd451";
// const APP_KEY = "9acb3aa12defaeed4a85d8e39cddd73d";
const APP_ID2 = "027c69d3";
const APP_KEY2 = "06c10b8536afafcb35d471d1e71b262e";
const APP_ID = "b479ca7f";
const APP_KEY = "1091d11a059bf224db39af98bca9540f	";

const APP_IDVal = "ffd7e1b9";
const APP_KEYVal = "e439b5df8590bafcf11efad43ca3a69b";

class FoodDetails extends Component {
  state = {
    foods: {},
    // ingredientLines: [],
  };

  async componentDidMount() {
    let res = await axios.get(
      `https://api.edamam.com/search?q=${this.props.match.params.id}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );

    this.setState({
      foods: res.data.hits,
      // ingredientLines: foods.recipe.ingredients,
    });
    // console.log(ingredients);
  }
  
  displayIngredients = () => {
    return this.state.foods[0]?.recipe.ingredientLines.map((ingredient) => (
      <li>{ingredient}</li>
    ));
  };

  render() {
    return (
      <div>
        <Navbar />
        {console.log(this.state.foods[0]?.recipe.ingredientLines.length)}
        <h1>{this.state.foods[0]?.recipe.label}</h1>
        <br />
        <img src={this.state.foods[0]?.recipe.image} />
        <br />
        <div>
          <span>Ingredients:</span>
          {this.displayIngredients()}
        </div>
        <div>Calories: {parseInt(this.state.foods[0]?.recipe.calories)}</div>
        <div>
          <br />
          <a target="_blank" href={this.state.foods[0]?.recipe.url}>
            Click for directions here!
          </a>
          {/* <iframe src={this.state.foods[0]?.recipe.url} /> */}
        </div>

        {/* {this.state.foods[0]?this.state.foods[0].recipe.label:''} */}
      </div>
    );
  }
}

export default FoodDetails;
