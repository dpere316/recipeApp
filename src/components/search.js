import React, { Component } from "react";

class search extends Component {
  state = {
    foods: [],
    search: "",
  };
  //   searchForFoods = async (event) => {
  //     event.preventDefault();
  //     console.log("search for food");
  //     console.log(this.state.search);
  //     let res = await axios.get(
  //       `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=${this.state.search}&to=100&app_id=${APP_ID2}&app_key=${APP_KEY2}`
  //     );
  //     this.setState({ foods: res.data.hits });
  //     console.log(this.state.foods);
  //     this.props.getFoods(res.data.hits);
  //     console.log(this.props);
  //     // this.props.history.push("/searchfood");
  //     createBrowserHistory().push("./searchfood");
  //   };
  //   handleChange = (event) => {
  //     this.setState({
  //       [event.target.name]: event.target.value,
  //     });
  //   };
  render() {
    return (
      <div>
        <form onSubmit={this.searchForFoods}>
          <input
            onChange={this.handleChange}
            name="search"
            placeholder="Search"
          ></input>
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default search;
