import React, { Component } from "react";
import axios from "axios";
import RandomFoods from "./RandomFood";
import Breakfast from "./Breakfast"
import Lunch from "./Lunch";
import Navbar from "./navbar";
import Dinner from "./Dinner";
const APP_ID = "b479ca7f";
const APP_KEY = "1091d11a059bf224db39af98bca9540f	";

class Home extends Component {
  state = {
    foods: [],
  };

  async componentDidMount() {
    let res = await axios.get(
      `https://api.edamam.com/search?q=chicken&to=10&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    // console.log(res);
    this.setState({
      foods: res.data,
    });
    // console.log(this.state.foods);
    // localStorage.setItem("res", JSON.stringify(res.data));
  }

  render() {
    return (
      <div>
        <Navbar />
        <Breakfast/>
        <Lunch/>
        <Dinner/>
      </div>
    );
  }
}

export default Home;
