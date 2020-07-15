import React, { Component } from "react";
import axios from "axios";
const APP_ID = "b479ca7f";
const APP_KEY = "1091d11a059bf224db39af98bca9540f	";

class FoodDetails extends Component {
  state = {
    foods: {},
    // ingredientLines: [],
  };

  async componentDidMount() {
    let res = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=${this.props.match.params.id}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    console.log(res);

    this.setState({
      foods: res.data.hits,
      // ingredientLines: foods.recipe.ingredients,
    });
    // console.log(ingredients);
  }

  displayIngredients = () => {
    return this.state.foods[0]?.recipe.ingredientLines.map((ingredient) => (
      <li className="list-ingredients">{ingredient}</li>
    ));
  };

  render() {
    return (
      <div className="single-layout">
        <div>
          <br />
          <img src={this.state.foods[0]?.recipe.image} />
          <br />
          <h1 className="single-food-title">
            {this.state.foods[0]?.recipe.label}
          </h1>
        </div>
        <div className="calories">
          <span className="calories-seperation">
            Calories: {parseInt(this.state.foods[0]?.recipe.calories)}
          </span>{" "}
          |
          <span className="calories-separation">
            Number of Ingredient:{" "}
            {this.state.foods[0]?.recipe.ingredientLines.length}
          </span>{" "}
          |
          <a
            target="_blank"
            href={this.state.foods[0]?.recipe.url}
            classname="directions-link"
          >
            <span className="calories-separation">
              Click for directions here!
            </span>
          </a>
        </div>
        <div className="ingredients">
          <span className="ingredient-title">Ingredients:</span>
          <span className="ingredient-details">
            {" "}
            {this.displayIngredients()}
          </span>
        </div>

        {/* <iframe src={this.state.foods[0]?.recipe.url} /> */}
        {/* {this.state.foods[0]?this.state.foods[0].recipe.label:''} */}
      </div>
    );
  }
}

export default FoodDetails;
