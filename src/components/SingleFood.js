import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const APP_ID = "b479ca7f";
const APP_KEY = "1091d11a059bf224db39af98bca9540f	";

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
