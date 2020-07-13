import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// const APP_ID = "b479ca7f";
// const APP_KEY = "1091d11a059bf224db39af98bca9540f	";
const APP_ID2 = "027c69d3";
const APP_KEY2 = "06c10b8536afafcb35d471d1e71b262e";

class navbar extends Component {
  state = {
    foods: [],
    search: "",
  };

  async componentDidMount() {
    let res = await axios.get(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID2}&app_key=${APP_KEY2}&from=0&to=3&calories=591-722&health=alcohol-free`
    );
    // console.log(res);
    this.setState({
      foods: res.data,
    });
    // localStorage.setItem("res", JSON.stringify(res.data));
  }
  searchForFoods = async (event) => {
    event.preventDefault();
    console.log("search for food");
    console.log(this.state.search);
    let res = await axios.get(
      `https://api.edamam.com/search?q=${this.state.search}&to=100&app_id=${APP_ID2}&app_key=${APP_KEY2}`
    );
    this.setState({ foods: res.data.hits });
    console.log(this.state.foods);
    this.props.getFoods(res.data.hits);
    console.log(this.props);
    this.props.history.push("/searchfood");
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  displayAllFoods = () => {
    if (this.state.foods.length) {
      return this.state.foods.map((eachFood) => {
        return (
          <div>
            <Link to={`/foods/${eachFood.recipe.label}`}>
              <li>
                {eachFood.recipe.label}
                <br />
                <img src={eachFood.recipe.image} />
              </li>
            </Link>
          </div>
        );
      });
    }
  };
  // myFunction = () => {
  //   var x = document.getElementById("myTopnav");
  //   if (x.className === "topnav") {
  //     x.className += " responsive";
  //   } else {
  //     x.className = "topnav";
  //   }
  // };
  render() {
    // console.log(JSON.parse(localStorage.getItem("res")));
    // let obj = JSON.parse(localStorage.getItem("res"));

    return (
      // <div className="topnav" id="myTopnav">
      //   <Link to="/" className="active">
      //     <h1>Munchies</h1>
      //   </Link>
      <div className="topnav" id="myTopnav">
        <Link to="/" className="active">
          Home
        </Link>
        <Link to="">News</Link>
        <Link to="">Contact</Link>
        <Link to="">About</Link>
        <Link to="javascript:void(0);" className="icon">
          <i class="fa fa-bars"></i>
        </Link>

        <form onSubmit={this.searchForFoods}>
          <input
            onChange={this.handleChange}
            name="search"
            placeholder="Search"
          ></input>
          <button type="submit">Search</button>
        </form>
        {this.displayAllFoods()}
      </div>
    );
  }
}

export default navbar;
