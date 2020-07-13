import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar.js";
const AllFoods = (props) => {
  console.log(props);
  if (!props.foods.length) {
    props.history.push("/");
  }

  return (
    <div>
      <Navbar />
      {props.foods.map((item) => (
        <Link to={`/foods/${item.recipe.label}`}>
          <h4>{item.recipe.label}</h4>
          <img src={item.recipe.image} />
        </Link>
      ))}
    </div>
  );
};

export default AllFoods;
