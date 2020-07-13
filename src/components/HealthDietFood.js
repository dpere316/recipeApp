import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const APP_ID2 = "ffd7e1b9";
const APP_KEY2 = "e439b5df8590bafcf11efad43ca3a69b";

class HealthDietFood extends Component {
  state = {
    healthDietFoods: [],
  };

  async componentDidMount() {
    console.log(this);
    let res = await axios.get(
      `https://api.edamam.com/search?q=Diet=${this.props.match.params.id}&to=100&app_id=${APP_ID2}&app_key=${APP_KEY2}`
    );
    let res2 = await axios.get(
      `https://api.edamam.com/search?q=Health=${this.props.match.params.id}&to=100&app_id=${APP_ID2}&app_key=${APP_KEY2}`
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
        <div className="column">
          <div className="row">
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
    return <div>{this.displayFoods()}</div>;
  }
}

export default HealthDietFood;
