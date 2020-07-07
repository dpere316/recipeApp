import React, { Component } from "react";

class Breakfast extends Component {
  state = {
    foods: [],
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
  displayFoods = () => {
    return this.state.foods.map((eachfood) => {});
  };
  render() {
    return <div></div>;
  }
}

export default Breakfast;
