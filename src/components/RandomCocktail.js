import React, { Component } from "react";
import axios from "axios";
<<<<<<< HEAD

const APP_ID = "1eddd451";
const APP_KEY = "9acb3aa12defaeed4a85d8e39cddd73d";
=======
const APP_ID = "b479ca7f";
const APP_KEY = "1091d11a059bf224db39af98bca9540f	";
>>>>>>> 11c598170116984f0396337ba8e4585f3213358b

const APP_ID2 = "ffd7e1b9";
const APP_KEY2 = "e439b5df8590bafcf11efad43ca3a69b";

class RandomCocktail extends Component {
  state = {
    cocktails: [],
    randomTypeCocktail: [
      "cocktail",
      "tequila",
      "vodka",
      "scotch",
      "champagne cocktail",
      "rum punch",
    ],
  };

  async componentDidMount() {
    let res = await axios.get(
      `https://api.edamam.com/search?q=${
        this.state.randomTypeCocktail[this.randomIndex()]
      }&to=100&app_id=${APP_ID2}&app_key=${APP_KEY2}`
    );
    // console.log("random cocktail type category", res);

    const drink = this.randomizedCocktail(res.data.hits);
    // console.log("random cocktail within type category", drink);

    this.setState({
      cocktails: [...this.state.cocktails, drink.recipe],
    });
  }

  showRandomCocktail = () => {
    if (!!this.state.cocktails.length) {
      return this.state.cocktails.map((eachDrink) => {
        return (
          <li key="randomdrink">
            <img src={eachDrink.image} alt="random-drink" />
            <br />
            {eachDrink.label}
          </li>
        );
      });
    } else {
      return "";
    }
  };

  randomIndex = () => {
    let index = Math.floor(
      Math.random() * this.state.randomTypeCocktail.length
    );
    return index;
  };

  randomizedCocktail = (drinks) => {
    let index = Math.floor(Math.random() * drinks.length);
    return drinks[index];
  };

  render() {
    return <div>{this.showRandomCocktail()}</div>;
  }
}

export default RandomCocktail;
