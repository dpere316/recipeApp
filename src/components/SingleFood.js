import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// const APP_ID = "1eddd451";
// const APP_KEY = "9acb3aa12defaeed4a85d8e39cddd73d";
const APP_ID2 = "027c69d3";
const APP_KEY2 = "06c10b8536afafcb35d471d1e71b262e";
class SingleFood extends Component {
  state = {
    foods: {},
    // ingredientLines: [],
  };
  async componentDidMount() {
    let res = await axios.get(
      `https://api.edamam.com/search?q=${this.props.match.params.id}&app_id=${APP_ID2}&app_key=${APP_KEY2}`
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
        {console.log(this.state.foods[0]?.recipe.ingredientLines)}
        <h1>{this.state.foods[0]?.recipe.label}</h1>
        <br />
        <img src={this.state.foods[0]?.recipe.image} />
        <br />
        <div>Calories: {this.state.foods[0]?.recipe.calories}</div>
        {this.displayIngredients()}
        <div>
          <spn>
            Click the link to go to the instructions of how to cook this recipe!
          </spn>
          <br />
          <a target="_blank" href={this.state.foods[0]?.recipe.url}>
            Here
          </a>
          <iframe src={this.state.foods[0]?.recipe.url} />
        </div>

        {/* {this.state.foods[0]?this.state.foods[0].recipe.label:''} */}
      </div>
    );
  }
}

export default SingleFood;
