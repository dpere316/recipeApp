import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import RandomCocktail from "./RandomCocktail";
const APP_ID = "1949bcdc";
const APP_KEY = "b99569c224fcfecca6f202946bed7bfe";

// const APP_ID2 = "ffd7e1b9";
// const APP_KEY2 = "e439b5df8590bafcf11efad43ca3a69b";
const APP_ID2 = "027c69d3";
const APP_KEY2 = "06c10b8536afafcb35d471d1e71b262e";

class Home extends Component {
  state = {
    foods: [],
    randomTypeFood: [
      "egg",
      "omelet",
      "salad",
      "sandwhich",
      "soup",
      "starter",
      "pizza",
      "chicken",
      "beef",
      "steak",
      "lamb",
      "seafood",
      "pork",
      "american",
      "asian",
      "chinese",
      "french",
      "indian",
      "italian",
      "japanese",
      "kosher",
      "mediterranean",
      "mexican",
      "middle eastern",
      "caribbean",
    ],
  };

  async componentDidMount() {
    let res = await axios.get(
      `https://api.edamam.com/search?q=${
        this.state.randomTypeFood[this.randomIndex()]
      }&to=100&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    // console.log("random food type category", res);

    const food = this.randomizedFood(res.data.hits);
    // console.log("random food within type category", food);

    this.setState({
      foods: [...this.state.foods, food.recipe],
    });
  }

  showRandomFood = () => {
    if (!!this.state.foods.length) {
      return this.state.foods.map((eachFood) => {
        return (
          <div>
            <Link to={`/foods/${eachFood.label}`}>
              <li key="randomfood">
                <img src={eachFood.image} alt="random-food" />
                <br />
                <div className="column">{eachFood.label}</div>
              </li>
            </Link>
          </div>
        );
      });
    } else {
      return "";
    }
  };

  randomIndex = () => {
    let index = Math.floor(Math.random() * this.state.randomTypeFood.length);
    return index;
  };

  randomizedFood = (foods) => {
    let index = Math.floor(Math.random() * foods.length);
    return foods[index];
  };

  render() {
    return (
      <div className="randomFood">
        <div>
          <h1 className="column">Suggestion for the day</h1>
        </div>
        <div className="row">
          {this.showRandomFood()}
          <RandomCocktail />
        </div>
      </div>
    );
  }
}

export default Home;
