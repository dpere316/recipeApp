import React, { Component } from "react";
import axios from "axios";

const APP_ID = "1eddd451";
const APP_KEY = "9acb3aa12defaeed4a85d8e39cddd73d";

class Home extends Component {
  state = {
    foods: [],
    randomFoods: [
      "egg",
      "omelet",
      "salad",
      "sandwhich",
      "soup",
      "starter",
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
        this.state.randomFoods[this.randomIndex()]
      }&to=100&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    console.log(res);

    const food = this.randomizeRecipes(res.data.hits);
    console.log("random food", food);

    this.setState({
      foods: [...this.state.foods, food.recipe],
    });
  }

  showRandomFood = () => {
    if (!!this.state.foods.length) {
      return this.state.foods.map((eachFood) => {
        return (
          <li>
            {eachFood.label}
            <img src={eachFood.image} />
          </li>
        );
      });
    } else {
      return "no foods in the array";
    }
  };

  randomIndex = () => {
    let index = Math.floor(Math.random() * this.state.randomFoods.length);
    return index;
  };

  randomizeRecipes = (foods) => {
    let index = Math.floor(Math.random() * foods.length);
    return foods[index];
  };

  render() {
    return <div>{this.showRandomFood()}</div>;
  }
}

export default Home;
