import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const APP_ID2 = "ffd7e1b9";
const APP_KEY2 = "e439b5df8590bafcf11efad43ca3a69b";

class EthnicFood extends Component {
  state = {
    ethnicCategories: [
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
    ],
    ethnicFoods: [],
  };

  async componentDidMount() {
    let res = await axios.get(
      `https://api.edamam.com/search?q=${this.state.ethnicCategories}&app_id=${APP_ID2}&app_key=${APP_KEY2}`
    );
    this.setState({
      ethnicCategories: res.data.hits,
    });
  }

  render() {
    return (
      <div>
        <Link to={`/Mexican/${this.state.ethnicCategories[0]}`}>"Mexican"</Link>
        <Link to={`/Japanese/${this.state.ethnicCategories[1]}`}>
          "Japanese"
        </Link>
        <Link to={`/Italian/${this.state.ethnicCategories[2]}`}>"Italian"</Link>
        <Link to={`/American/${this.state.ethnicCategories[3]}`}>
          "American"
        </Link>
        <Link to={`/Indian/${this.state.ethnicCategories[4]}`}> "Indian"</Link>
        <Link to={`/Chinese/${this.state.ethnicCategories[5]}`}>"Chinese"</Link>
        <Link to={`/French/${this.state.ethnicCategories[6]}`}> "French"</Link>
        <Link to={`/South-American/${this.state.ethnicCategories[7]}`}>
          "South American"
        </Link>
        <Link to={`/Caribbean/${this.state.ethnicCategories[8]}`}>
          "Caribbean"
        </Link>
        <Link to={`/Mediterranean/${this.state.ethnicCategories[9]}`}>
          "Mediterranean"
        </Link>
      </div>
    );
  }
}

export default EthnicFood;
