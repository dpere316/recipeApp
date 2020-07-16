import React, { Component } from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import Search from "./Search/search";

class navbarPhone extends Component {
  state = {
    showForm: false,
  };
  toggleSearchBar = () => {
    this.setState({
      showForm: !this.state.showForm,
    });
  };

  displayAllFoods = () => {
    if (this.props.foods.length) {
      return this.props.foods.map((eachFood) => {
        return (
          <div>
            <Link to={`/foods/${eachFood.recipe.label}`}>
              {eachFood.recipe.label}
              <br />
              <img src={eachFood.recipe.image} />
            </Link>
          </div>
        );
      });
    }
  };

  render() {
    return (
      <div>
        <div className="navbar-phone">
          {console.log(this.props)}
          <Link to="/">
            <h1>Munchies</h1>
          </Link>

          <Menu right>
            {this.state.showForm ? (
              <Search getFoods={this.props.getFoods} />
            ) : (
              ""
            )}
            <Link className="menu-item" to="/">
              Home
            </Link>

            <a className="menu-item" onClick={this.toggleSearchBar}>
              Search
            </a>

            <Link className="menu-item" to="/ethnicfood">
              Ethnic Foods
            </Link>

            <Link className="menu-item" to="/healthdiet">
              Diet Restrictions
            </Link>
          </Menu>
        </div>
        {/* {this.displayAllFoods()} */}
      </div>
    );
  }
}

export default navbarPhone;
