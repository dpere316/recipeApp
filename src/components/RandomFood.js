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
    // console.log(res);
    this.setState({
      foods: res.data,
    });
  }

  showRandomFood = () => {
    if (this.state.foods.length) {
      return this.state.foods.map((eachFood) => {
        return (
          <li>
            {eachFood.recipe.label}
            <img src={eachFood.recipe.image} />
          </li>
        );
      });
    }
  };

  randomIndex = () => {
    let index = Math.floor(Math.random() * this.state.randomFoods.length);
    return index;
  };

  render() {
    return <div>{this.showRandomFood()}</div>;
  }
}

export default Home;
