import "./App.css";
import axios from "axios";
import React, { Component } from "react";

const YOUR_APP_ID = "1eddd451";
const YOUR_APP_KEY = "9acb3aa12defaeed4a85d8e39cddd73d";

class App extends Component {
  state = {
    recipes: [],
  };

  async componentDidMount() {
    let res = await axios.get(`https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free
    `);
    console.log(res);
    this.setState({
      recipes: res.data,
    });
  }

  displayRec = () => {
    return this.state.recipes.map((eachRec) => {
      return eachRec.name;
    });
  };

  render() {
    return (
      <div>
        {this.displayRec()}
        {/* {this.state.recipes.name} */}
      </div>
    );
  }
}

export default App;
