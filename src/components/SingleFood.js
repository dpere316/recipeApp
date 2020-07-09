import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const APP_ID = "1eddd451";
const APP_KEY = "9acb3aa12defaeed4a85d8e39cddd73d";

const APP_ID2 = "ffd7e1b9";
const APP_KEY2 = "e439b5df8590bafcf11efad43ca3a69b";

class SingleFood extends Component {
  state = {
    foods: {},
  };
  async componentDidMount() {
    let res = await axios.get(
      `https://api.edamam.com/search?q=${this.props.match.params.id}&app_id=${APP_ID2}&app_key=${APP_KEY2}`
    );
    this.setState({
      foods: res.data.hits,
    });
  }
  render() {
    return <div>{console.log("single food", this.state.foods)}</div>;
  }
}

export default SingleFood;
