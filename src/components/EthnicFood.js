import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const APP_ID2 = "ffd7e1b9";
const APP_KEY2 = "e439b5df8590bafcf11efad43ca3a69b";

class EthnicFood extends Component {
  state = {
    ethnicFoods: [],
  };

  async componentDidMount() {
    console.log(this);
    let res = await axios.get(
      `https://api.edamam.com/search?q=${this.props.match.params.ethnicity}&to=100&app_id=${APP_ID2}&app_key=${APP_KEY2}`
    );
    console.log(res);
    this.setState({
      ethnicFoods: res.data.hits,
    });
  }

  displayRecipes = () => {
    return this.state.ethnicFoods.map((eachRec) => {
      return (
        <div>
          <Link to={`/foods/${eachRec.recipe.label}`}>
            <li>
              <img src={eachRec.recipe.image} alt="ethnicfood" />
              {eachRec.recipe.label}
            </li>
          </Link>
        </div>
      );
    });
  };

  render() {
    return <div>{this.displayRecipes()}</div>;
  }
}

export default EthnicFood;
