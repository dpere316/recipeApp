import React, { Component } from "react";
import axios from "axios";

const APP_ID2 = "ffd7e1b9";
const APP_KEY2 = "e439b5df8590bafcf11efad43ca3a69b";

class EthnicFood extends Component {
  state = {
    ethnicFoods: [
      "Mexican",
      "Japanese",
      "Italian",
      "American",
      "Indian",
      "Chinese",
      "French",
      "South American",
      "Caribbean",
      "Mediterranean",
    ];
  };

  async componentDidMount() {
    let res = await axios.get(
      `https://api.edamam.com/search?q=${this.state.ethnicFoods}&to=100&app_id=${APP_ID2}&app_key=${APP_KEY2}`
    );
    // console.log("random food type category", res);

    const food = this.randomizedFood(res.data.hits);
    // console.log("random food within type category", food);

    this.setState({
      foods: [...this.state.foods, food.recipe],
    });
  }

  render() {
    return <div>
      <li>"Mexican"</li>
      <li>"Japanese"</li>
      <li>"Italian"</li>
      <li>"American"</li>
      <li>"Indian"</li>
      <li>"Chinese"</li>
      <li>"French"</li>
      <li>"South American"</li>
      <li>"Caribbean"</li>
      <li>"Mediterranean"</li>
    </div>;
  }
}


export default EthnicFood;
