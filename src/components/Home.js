import React, { Component } from "react";
import axios from "axios";
import RandomFood from "./Functions/RandomFood";
import Navbar from "./Search/navbar";



const APP_ID = "1949bcdc";
const APP_KEY = "b99569c224fcfecca6f202946bed7bfe";

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
        <Navbar {...this.props} />
        <RandomFood getCocktails={this.props.getCocktails}/>
      </div>
    );
  }
}

export default Home;
