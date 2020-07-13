import React, { Component } from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import Search from "./search";

class navbarPhone extends Component {
  render() {
    return (
      <div className="navbar-phone">
        <Link to="/">
          <h1>Munchies</h1>
        </Link>

        <Menu right>
          <Search />
          <Link className="menu-item" to="/">
            Home
          </Link>

          <Link className="menu-item" to="/burgers">
            Burgers
          </Link>

          <Link className="menu-item" to="/pizzas">
            Pizzas
          </Link>

          <Link className="menu-item" to="/desserts">
            Desserts
          </Link>
        </Menu>
      </div>
    );
  }
}

export default navbarPhone;
