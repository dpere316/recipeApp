import React, { Component } from "react";
import axios from "axios";
const APP_ID = "1eddd451";
const APP_KEY = "9acb3aa12defaeed4a85d8e39cddd73d";

class navbar extends Component {
  state = {
<<<<<<< HEAD
    foods: [],
=======
    foods: {},
>>>>>>> daniel
  };

  async componentDidMount() {
    let res = await axios.get(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`
    );
    console.log(res);
    this.setState({
      foods: res.data,
    });
    // localStorage.setItem("res", JSON.stringify(res.data));
  }
<<<<<<< HEAD
  render() {
    // console.log(JSON.parse(localStorage.getItem("res")));
    // let obj = JSON.parse(localStorage.getItem("res"));

    return <div></div>;
=======

  displayFoods = () => {
    return this.state.foods.map((eachfood) => {});
  };

  render() {
    // console.log(JSON.parse(localStorage.getItem("res")));
    // let obj = JSON.parse(localStorage.getItem("res"));
    // This is Daniel Branch
    return <div>
        
    </div>;
>>>>>>> daniel
  }
}

export default navbar;
