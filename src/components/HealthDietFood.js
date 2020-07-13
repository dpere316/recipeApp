import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DietCategories from "./DietCategories";

const APP_ID = "ffd7e1b9";
const APP_KEY = "e439b5df8590bafcf11efad43ca3a69b	";

class HealthDietFood extends Component {
  state = {
    healthDietFoods: [],
  };

  async componentDidMount() {
    console.log(this);
    let res = await axios.get(
      `https://api.edamam.com/search?q=Diet=${this.props.match.params.id}&to=100&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    let res2 = await axios.get(
      `https://api.edamam.com/search?q=Health=${this.props.match.params.id}&to=100&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    // console.log(res);
    this.setState({
      healthDietFoods: res.data.hits,
      healthDietFoods: res2.data.hits,
    });
  }

  displayFoods = () => {
    return this.state.healthDietFoods.map((eachRec) => {
      return (
        <div>
          <div>
            <Link to={`/foods/${eachRec.recipe.label}`}>
              <li>
                <img src={eachRec.recipe.image} alt="healthdiet" />
                {eachRec.recipe.label}
              </li>
            </Link>
          </div>
        </div>
      );
    });
  };

  render() {
    return <div>
    <DietCategories/>
    {this.displayFoods()}</div>;
  }
}

export default HealthDietFood;
