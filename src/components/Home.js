import React, { Component } from "react";
import Navbar from "./navbar";
import SingleFood from "./SingleFood";
import Breakfast from "./Breakfast";
import Lunch from "./Lunch";
import Dinner from "./Dinner";
import Personalize from "./Personalize";
import { Link, Switch, Route } from "react-router-dom";
import axios from "axios";

class Home extends Component {
  state = {
    foods: [],
  };

  //   async componentDidMount() {
  //     let res = await axios.get(
  //       `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`
  //     );
  //     console.log(res);
  //     this.setState({
  //       foods: res.data,
  //     });
  //     // localStorage.setItem("res", JSON.stringify(res.data));
  //   }

  render() {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}

export default Home;
