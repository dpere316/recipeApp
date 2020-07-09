import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const APP_ID = "1eddd451";
const APP_KEY = "9acb3aa12defaeed4a85d8e39cddd73d";

class SingleFood extends Component {
  state = {
    foods: {},
  };
  async componentDidMount() {
    let res = await axios.get(
      `https://api.edamam.com/search?q=${this.props.match.params.id}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    this.setState({
      foods: res.data.hits,
    });
  }
  render() {
    return <div>{console.log(this.state.foods)}</div>;
  }
}

export default SingleFood;
