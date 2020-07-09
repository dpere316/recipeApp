import React, { Component } from "react";
import axios from "axios";

const APP_ID = "1eddd451";
const APP_KEY = "9acb3aa12defaeed4a85d8e39cddd73d";

const APP_ID2 = "ffd7e1b9";
const APP_KEY2 = "e439b5df8590bafcf11efad43ca3a69b";

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
      }&to=100&app_id=${APP_ID2}&app_key=${APP_KEY2}`
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
          <li key="randomfood">
            <img src={eachFood.image} alt="random-food" />
            <br />
            {eachFood.label}
          </li>
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
    return <div>{this.showRandomFood()}</div>;
  }
}

export default Home;
