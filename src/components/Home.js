import React, { Component } from "react";
import axios from "axios";
import RandomFoods from "./RandomFood";

const APP_ID = "1eddd451";
const APP_KEY = "9acb3aa12defaeed4a85d8e39cddd73d";

class Home extends Component {
  state = {
    foods: [],
  };

  async componentDidMount() {
    let res = await axios.get(
      `https://api.edamam.com/search?q=chicken&to=100&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    console.log(res);
    this.setState({
      foods: res.data,
    });
    console.log(foods);
    // localStorage.setItem("res", JSON.stringify(res.data));
  }

  render() {
    return (
      <div>
        <Navbar />
        <Lunch />
      </div>
    );
  }
}

export default Home;
